import { FC } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import EditIcon from '@mui/icons-material/Edit'

import MenuGroup from '@/components/molucules/MenuGroup'
import useHooks from './hooks'
import { signIn, signOut } from 'next-auth/react'

const MenuGroups: FC = () => {
  const { t, moveToPage, user } = useHooks()

  const itemsAboutPortfolio = [
    {
      label: t('portfolio:AddPortfolio'),
      onClick: () => moveToPage('/portfolios/new'),
      icon: <CreateIcon />,
    },
  ]
  const itemsAboutMenu = [
    {
      label: '新規登録・ログイン',
      onClick: () => signIn(),
      icon: <LoginIcon />,
      condition: !user,
    },
    {
      label: 'プロフィールを編集',
      onClick: () => moveToPage(`/profile/edit`),
      icon: <EditIcon />,
      condition: !!user,
    },
    {
      label: 'ログアウト',
      onClick: () => signOut(),
      icon: <LogoutIcon />,
      condition: !!user,
    },
  ].filter((i) => i.condition)

  return (
    <>
      <MenuGroup items={itemsAboutPortfolio} name={t('common:Post')} />
      <MenuGroup items={itemsAboutMenu} name={t('common:Menu')} />
    </>
  )
}

export default MenuGroups
