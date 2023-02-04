import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material'

export type ButtonProps = MUIButtonProps & { label: string }

const Button = ({ label, variant = 'contained', ...rest }: ButtonProps) => {
  return (
    <MUIButton variant={variant} {...rest}>
      {label}
    </MUIButton>
  )
}

export default Button
