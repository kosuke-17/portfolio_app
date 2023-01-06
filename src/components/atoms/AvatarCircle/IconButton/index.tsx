import { FC, ReactNode } from 'react'
import StyledIconButton from '../../Styled/StyledIconButton'

type Props = { icon: ReactNode; fontSize: string }

const IconButton: FC<Props> = ({ icon, ...rest }) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>
}
export default IconButton
