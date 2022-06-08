import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SummarizedAlbum from './SummarizedAlbum'

export default {
  title: 'Components/SummarizedAlbum',
  component: SummarizedAlbum,
  argTypes: {}
} as ComponentMeta<typeof SummarizedAlbum>

const Template: ComponentStory<typeof SummarizedAlbum> = (args) => (
  <SummarizedAlbum {...args} />
)

export const Example = Template.bind({})
Example.args = {
  imageSource:
    'https://i.scdn.co/image/ab67616d0000b273443bd0f08a60dfad2b0165e7',
  summarizedAlbumTitle: 'The Book of Souls'
}
