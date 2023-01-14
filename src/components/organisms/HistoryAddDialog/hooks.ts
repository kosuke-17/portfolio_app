import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { postHistorySchema, PostHistoryInput } from '@/schema/history'
import { useMutateHistory } from '@/hooks/useMutateHistory'
import { useState } from 'react'

export type DefaultValues = PostHistoryInput

type Props = {
  onClose: () => void
}

const useHooks = ({ onClose }: Props) => {
  const defaultValues = {
    name: '',
    description: '',
  }
  const date = new Date()
  const { postHistoryMutation } = useMutateHistory()
  const [startedAt, setStartedAt] = useState<Date>(date)
  const [endedAt, setEndedAt] = useState<Date>(date)
  const { control, handleSubmit } = useForm<DefaultValues>({
    resolver: zodResolver(postHistorySchema),
    defaultValues,
  })
  const handleStartedAt = (value: Date | null) => {
    if (!value) return
    setStartedAt(value)
  }
  const handleEndedAt = (value: Date | null) => {
    if (!value) return
    setEndedAt(value)
  }
  const create: SubmitHandler<DefaultValues> = (values: DefaultValues) => {
    console.log({ ...values, startedAt, endedAt })

    postHistoryMutation.mutate({ ...values, startedAt, endedAt })
    onClose()
  }

  return {
    defaultValues,
    control,
    handleStartedAt,
    handleEndedAt,
    startedAt,
    endedAt,
    create: handleSubmit(create),
  }
}

export default useHooks
