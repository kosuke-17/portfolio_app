import { FC } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import StyledAvatar from '@/components/atoms/Styled/StyledAvatar'
import Link from '@/components/atoms/Link'
import IconButton from './IconButton'

type Props = {
  userImage: string
}

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
          fontSize='small'
        />
      )}
    </Link>
  )
}

export default AvatarCircle
