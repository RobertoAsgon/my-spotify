import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CheckBox from './CheckBox'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {}
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

export const CheckBoxVariantLogin = Template.bind({})

CheckBoxVariantLogin.args = {
  variant: 'variant-login'
}
