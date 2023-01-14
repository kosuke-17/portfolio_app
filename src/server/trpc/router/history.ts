import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc'

import {
  getHistoryByUserIdSchema,
  getHistorySchema,
  postHistorySchema,
  updateHistorySchema,
} from '@/schema/history'
import { authedProcedure, t } from '../trpc'

export const HistoryRouter = t.router({
  postHistory: authedProcedure
    .input(postHistorySchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.history.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      })
    }),
  getHistory: t.procedure
    .input(getHistorySchema)
    .query(async ({ ctx, input: { userId, id } }) => {
      const data = await ctx.prisma.history.findFirst({
        where: { userId, id },
        select: selectHistory,
      })

      if (!data) throw new TRPCError(getNotFoundOPTS('History'))

      return data
    }),
  getAlllHistoryByUserId: t.procedure
    .input(getHistoryByUserIdSchema)
    .query(async ({ ctx, input: { userId } }) => {
      const data = await ctx.prisma.history.findMany({
        where: { userId },
        select: selectHistory,
      })

      if (!data.length) throw new TRPCError(getNotFoundOPTS('Histories'))

      return data
    }),
  updateHistory: authedProcedure
    .input(updateHistorySchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...rest } = input

      const data = ctx.prisma.history.findFirst({ where: { id } })

      if (!data) throw new TRPCError(getNotFoundOPTS('History'))

      return await ctx.prisma.history.update({
        where: { id },
        data: { ...rest },
      })
    }),
})

const selectHistory = Prisma.validator<Prisma.HistorySelect>()({
  name: true,
  startedAt: true,
  endedAt: true,
  description: true,
})

const getNotFoundOPTS = (
  name: string,
): {
  code: TRPC_ERROR_CODE_KEY
  msg: string
} => {
  return { code: 'NOT_FOUND', msg: `Not Found ${name}` }
}
