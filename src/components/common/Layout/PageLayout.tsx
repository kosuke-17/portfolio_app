import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'

import Header from '@/components/common/Header/Header'

type Props = {
  children: ReactNode
}

const StyledMainLayout = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}))

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMainLayout>{children}</StyledMainLayout>
    </>
  )
}

export default PageLayout
