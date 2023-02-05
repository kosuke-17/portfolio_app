import Stack from '@mui/material/Stack'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import IconButton, { IconButtonProps } from '.'

export default {
  title: 'MUI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <Stack direction='row' spacing={1}>
    <IconButton {...args} />
  </Stack>
)

export const Primary = Template.bind({})
const primaryProps: IconButtonProps = {
  size: 'small',
  icon: <AccountCircleIcon />,
}
Primary.args = primaryProps
