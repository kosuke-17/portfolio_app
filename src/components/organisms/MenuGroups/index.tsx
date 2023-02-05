import { FC } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import EditIcon from '@mui/icons-material/Edit'

import MenuGroup from '@/components/molucules/MenuGroup'
import useHooks from './hooks'

const MenuGroups: FC = () => {
  const { t, moveToPage } = useHooks()
  const userId = ''
  const itemsAboutPortfolio = [
    {
      label: t('portfolio:AddPortfolio'),
      onClick: () => moveToPage('/portfolios/new'),
      icon: <CreateIcon />,
    },
  ]
  const itemsAboutMenu = [
    {
      label: 'プロフィールを編集',
      onClick: () => moveToPage(`/users/${userId}/profile/edit`),
      icon: <EditIcon />,
    },
  ]

  return (
    <>
      <MenuGroup items={itemsAboutPortfolio} name={t('common:Post')} />
      <MenuGroup items={itemsAboutMenu} name={t('common:Menu')} />
    </>
  )
}

export default MenuGroups
