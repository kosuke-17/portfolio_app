import { FC } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import CustomTextField from '@/components/molucules/CustomTextField'
import { PostHistoryInput } from '@/schema/history'
import TextField from '@mui/material/TextField'
import { DialogActions, DialogContent } from '@mui/material'

import useHooks from './hooks'

type Props = {
  open: boolean
  onClose: () => void
}

export type DefaultValues = PostHistoryInput

const HistoryAddDialog: FC<Props> = ({ open, onClose }) => {
  const {
    defaultValues,
    control,
    handleStartedAt,
    handleEndedAt,
    startedAt,
    endedAt,
    create,
  } = useHooks({ onClose })
  return (
    <Dialog onClose={onClose} open={open}>
      <form onSubmit={create}>
        <DialogTitle>
          <CustomTextField
            name='name'
            control={control}
            defaultValue={defaultValues.name}
            placeholder='職歴・学歴'
          />
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              value={startedAt}
              onChange={handleStartedAt}
              renderInput={(params) => <TextField {...params} />}
            />
            から
            <DesktopDatePicker
              value={endedAt}
              onChange={handleEndedAt}
              renderInput={(params) => (
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...params}
                />
              )}
            />
            まで
          </LocalizationProvider>

          <CustomTextField
            name='description'
            control={control}
            defaultValue={defaultValues.description}
            placeholder=''
            minRows={4}
          />
        </DialogContent>
      </form>
      <DialogActions>
        <Button onClick={onClose} variant='outlined'>
          キャンセル
        </Button>
        <Button onClick={onClose} type='submit' variant='contained'>
          追加
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default HistoryAddDialog
