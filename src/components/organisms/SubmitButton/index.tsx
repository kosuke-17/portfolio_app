import { FC } from 'react'
import { Box, Button } from '@mui/material'

import SwitchGroup from '@/components/organisms/SwitchGroup'
import { Control } from 'react-hook-form'

type Props = {
  isEdit: boolean
  watchIsPublished: boolean
  control: Control<any>
  defaultValues: {
    isPublished: boolean
  }
  checkUnClickable: () => boolean
}

const SubmitButton: FC<Props> = ({
  isEdit,
  control,
  defaultValues,
  watchIsPublished,
  checkUnClickable,
}) => {
  return (
    <Box sx={{ marginY: 2, display: 'flex' }}>
      <SwitchGroup
        name='isPublished'
        label={isEdit ? '公開中' : '公開する'}
        control={control}
        defaultValue={defaultValues.isPublished}
        disabled={isEdit}
      />

      <Box sx={{ marginLeft: 2 }}>
        <Button variant='contained' disabled={isEdit || checkUnClickable()}>
          {watchIsPublished ? '投稿する' : '下書き保存'}
        </Button>
      </Box>
    </Box>
  )
}

export default SubmitButton
