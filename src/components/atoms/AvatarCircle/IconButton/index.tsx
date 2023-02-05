import { FC, ReactNode } from 'react'
import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledIconButton = styled(MUIIconButton)(({ theme }) => ({
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

export type IconButtonProps = MUIIconButtonProps & {
  icon: ReactNode
}

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>
}
export default IconButton
