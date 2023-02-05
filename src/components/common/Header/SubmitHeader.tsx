import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'

import Logo from '@/components/atoms/Logo'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
}))

const SubmitHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledHeader sx={{ borderBottom: `1px solid #9dabb1` }}>
      <Logo />
      {children}
    </StyledHeader>
  )
}

export default SubmitHeader
