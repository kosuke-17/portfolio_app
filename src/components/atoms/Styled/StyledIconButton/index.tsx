import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export default StyledIconButton
