import z from 'zod'

//client
export const postHistorySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  startedAt: z.date(),
  endedAt: z.date(),
})
export type PostHistoryInput = z.infer<typeof postHistorySchema>

export const updateHistorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  startedAt: z.date(),
  endedAt: z.date(),
})
export type UpdateHistoryInput = z.infer<typeof updateHistorySchema>

// server
export const getHistorySchema = z.object({
  userId: z.string(),
  id: z.string(),
})
export const getHistoryByUserIdSchema = z.object({ userId: z.string() })
