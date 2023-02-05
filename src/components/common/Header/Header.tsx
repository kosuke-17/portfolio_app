import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search'

import Logo from '@/components/atoms/Logo'
import AvatarCircle from '@/components/molucules/AvatarCircle'
import MenuGroups from '@/components/organisms/MenuGroups'
import IconButton from '@/components/atoms/IconButton'
import { useSession } from 'next-auth/react'

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
}))

const StyledMenuGroups = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const Header: FC = () => {
  const { data } = useSession()

  return (
    <StyledHeader sx={{ borderBottom: `1px solid #e0e0e0` }}>
      <Logo />

      <StyledMenuGroups direction='row' spacing={2}>
        <IconButton icon={<SearchIcon />} aria-label='search' size='small' />

        <AvatarCircle userImage={data?.user?.image} />

        <MenuGroups />
      </StyledMenuGroups>
    </StyledHeader>
  )
}

export default Header
