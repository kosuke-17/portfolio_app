import { trpc } from '../utils/trpc'

export const useMutateHistory = () => {
  // const utils = trpc.useContext()

  const postHistoryMutation = trpc.history.postHistory.useMutation()

  return { postHistoryMutation }
}
