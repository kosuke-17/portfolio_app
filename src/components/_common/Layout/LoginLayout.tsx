import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { styled } from '@mui/material/styles'

type Props = {
  title: string
  children: ReactNode
}

const StyledMain = styled('main')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    maxWidth: '600px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '900px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1200px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1536px',
  },
}))

const LoginLayout: FC<Props> = ({ children, title = 'PortfolioApp' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default LoginLayout
