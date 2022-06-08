import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const ButtonVariantFacebookTemplate: ComponentStory<typeof Button> = () => (
  <Button variant={'facebook'} iconColor="white" />
)

const ButtonVariantAppleTemplate: ComponentStory<typeof Button> = () => (
  <Button variant={'apple'} iconColor="white" />
)

const ButtonVariantEnterTemplate: ComponentStory<typeof Button> = () => (
  <Button variant={'enter'} />
)

const ButtonVariantGoogleTemplate: ComponentStory<typeof Button> = () => (
  <Button variant={'googleOutlined'} />
)

const ButtonVariantTelefoneTemplate: ComponentStory<typeof Button> = () => (
  <Button variant={'phoneOutlined'} />
)

export const ButtonVariantFacebook = ButtonVariantFacebookTemplate.bind({})

export const ButtonVariantApple = ButtonVariantAppleTemplate.bind({})

export const ButtonVariantEnter = ButtonVariantEnterTemplate.bind({})

export const ButtonVariantGoogle = ButtonVariantGoogleTemplate.bind({})

export const ButtonVariantTelefone = ButtonVariantTelefoneTemplate.bind({})
