import { FC } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import CertificationCard from '@/components/organisms/CertificationCard'
import HistoryCard from '@/components/organisms/HistoryCard'
import HistoryAddDialog from '@/components/organisms/HistoryAddDialog'
import ProfileCard from '@/components/organisms/ProfileCard'

import useHooks from './hooks'

export type TabType = 'history' | 'certification'

const StyledProfileDetailStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginRight: theme.spacing(16),
  marginLeft: theme.spacing(16),
  '.MuiTab-root': {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
  },
}))

const StyledTabLabelBox = styled(Box)(() => ({
  fontSize: '16px',
  fontWeight: 700,
}))

const StyledLeftContentBox = styled(Box)(() => ({
  width: '66%',
}))

const StyledRightContentBox = styled(Box)(() => ({
  width: '33%',
}))

const ProfileDetail: FC<{ userId: string }> = ({ userId }) => {
  const {
    profile,
    histories,
    certifications,
    value,
    handleChange,
    open,
    handleOpenDialog,
    handleCloseDialog,
  } = useHooks({
    userId,
  })

  const tabs = [
    { label: '学歴・職歴', value: 'history' },
    { label: '資格', value: 'certification' },
  ]

  return (
    <>
      <StyledProfileDetailStack direction='row' spacing={4}>
        <StyledLeftContentBox>
          <Tabs value={value} onChange={handleChange}>
            {tabs.map(({ label, value }) => (
              <Tab
                key={label}
                label={<StyledTabLabelBox>{label}</StyledTabLabelBox>}
                value={value}
                sx={{ marginLeft: 0.5 }}
              />
            ))}
          </Tabs>

          <HistoryCard
            histories={histories}
            value={value}
            handleOpenDialog={handleOpenDialog}
          />
          <CertificationCard certifications={certifications} value={value} />
        </StyledLeftContentBox>

        <StyledRightContentBox>
          <ProfileCard profile={profile} />
        </StyledRightContentBox>
      </StyledProfileDetailStack>

      <HistoryAddDialog open={open} onClose={handleCloseDialog} />
    </>
  )
}

export default ProfileDetail
