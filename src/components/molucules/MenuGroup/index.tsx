import { FC, ReactNode } from 'react'
import { Button as MUIButton } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import Button from '@/components/atoms/Button'

import useHooks from './hooks'
import Box from '@mui/material/Box'

type Props = {
  items: {
    label: string
    onClick: () => void
    icon: ReactNode
  }[]
  name: string
}

const ItemButton = styled(MUIButton)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
}))

const StyledIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}))

const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const MenuGroup: FC<Props> = ({ items, name }) => {
  const { open, handleOpenMenu, handleCloseMenu, anchorEl } = useHooks()

  return (
    <>
      <Button variant='contained' onClick={handleOpenMenu} label={name} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {items.map(({ label, onClick, icon }) => {
          return (
            <MenuItem
              component={ItemButton}
              key={label}
              onClick={onClick}
              startIcon={<StyledIcon>{icon}</StyledIcon>}
            >
              <StyledLabel>{label}</StyledLabel>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default MenuGroup
