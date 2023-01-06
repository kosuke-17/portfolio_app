import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

type Props = {
  width: number
  height: number
}

const StyledAvatar = styled(Avatar)<Props>(({ width, height }) => ({
  width,
  height,
}))

export default StyledAvatar
