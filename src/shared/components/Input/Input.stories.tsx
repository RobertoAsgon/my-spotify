import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const EmailOrUser = Template.bind({})

export const Senha = Template.bind({})

EmailOrUser.args = {
  variant: 'login',
  placeholder: 'Endereço de e-mail ou nome de usuário'
}

Senha.args = {
  variant: 'login',
  placeholder: 'Senha'
}
