import Stack from '@mui/material/Stack'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'MUI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction='row' spacing={1}>
    <Button variant='outlined' {...args} />
    <Button variant='contained' {...args} />
    <Button variant='contained' disabled {...args} />
  </Stack>
)

export const Primary = Template.bind({})
const primaryProps: ButtonProps = {
  label: 'ボタン',
}
Primary.args = primaryProps
