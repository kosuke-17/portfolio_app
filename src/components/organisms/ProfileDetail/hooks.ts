import { SyntheticEvent, useState } from 'react'
import { trpc } from '@/utils/trpc'

import { TabType } from '.'

const useHooks = ({ userId }: { userId: string }) => {
  const { data: profile } = trpc.profile.getProfileByUserId.useQuery({
    userId,
  })
  const { data: histories } = trpc.history.getAlllHistoryByUserId.useQuery({
    userId,
  })
  const { data: certifications } =
    trpc.certification.getAlllCertificationByUserId.useQuery({
      userId,
    })
  const [value, setValue] = useState<TabType>('history')
  const [open, setOpenDialog] = useState(false)

  const handleChange = (_: SyntheticEvent, selectedTabType: TabType) => {
    setValue(selectedTabType)
  }

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return {
    profile,
    histories,
    certifications,
    value,
    handleChange,
    open,
    handleOpenDialog,
    handleCloseDialog,
  }
}
export default useHooks
