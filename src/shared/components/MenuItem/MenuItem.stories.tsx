import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuItem from './MenuItem'

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  argTypes: {}
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
)

export const Example = Template.bind({})
Example.args = {}
