import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Album from './Album'

export default {
  title: 'Components/Album',
  component: Album,
  argTypes: {}
} as ComponentMeta<typeof Album>

const Template: ComponentStory<typeof Album> = (args) => <Album {...args} />

export const Example = Template.bind({})
Example.args = {
  imageSource:
    'https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864',
  albumTitle: 'Ten',
  albumDescription: '1991 - Álbum'
}
