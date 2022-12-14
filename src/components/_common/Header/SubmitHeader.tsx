import { FC, ReactNode } from 'react'

import { Logo } from '@/components/atoms'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'

export const SubmitHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledHeader className='bg-slate-100'>
      <Logo />
      {children}
    </StyledHeader>
  )
}
