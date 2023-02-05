import { FC } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

import Link from '@/components/atoms/Link'
import IconButton from '@/components/atoms/IconButton'

type Props = {
  userImage: string | undefined | null
}

const StyledAvatar = styled(Avatar)<{ width: number; height: number }>(
  ({ width, height }) => ({
    width,
    height,
  }),
)

const AvatarCircle: FC<Props> = ({ userImage }) => {
  return (
    <Link href='/profile'>
      {userImage ? (
        <StyledAvatar
          src={userImage}
          alt='ユーザーアバター'
          width={36}
          height={36}
        />
      ) : (
        <IconButton
          icon={<AccountCircleIcon />}
          aria-label='search'
          size='small'
        />
      )}
    </Link>
  )
}

export default AvatarCircle
