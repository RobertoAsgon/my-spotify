import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Play from './Play'

export default {
  title: 'Components/Play',
  component: Play,
  argTypes: {}
} as ComponentMeta<typeof Play>

const Template: ComponentStory<typeof Play> = (args) => <Play {...args} />

export const Example = Template.bind({})
Example.args = {
  isActive: true
}
