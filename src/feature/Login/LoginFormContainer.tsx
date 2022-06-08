import React from 'react'
import { Button } from '../../shared/components/Button'
import { CheckBox } from '../../shared/components/CheckBox'
import { Input } from '../../shared/components/Input'

import {
  CheckBoxAndButtonWrapper,
  CheckBoxWrapper,
  Divider,
  LinkForgotPass,
  LoginFormContainerBg
} from './styles'

const LoginFormContainer: React.FC = () => {
  const redirectUri = 'http://localhost:3000/authenticate'
  const authenticationUrl = `${process.env.SPOTIFY_AUTHENTICATE_URL}?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${redirectUri}`

  return (
    <LoginFormContainerBg>
      <Input
        variant="login"
        placeholder="Endereço de e-mail ou nome de usuário"
      />

      <Input variant="login" placeholder="Senha" />

      <LinkForgotPass>Esqueceu sua senha?</LinkForgotPass>

      <CheckBoxAndButtonWrapper>
        <CheckBoxWrapper>
          {/* <CheckBox variant="login" /> */}
          <strong>Lembrar de mim</strong>
        </CheckBoxWrapper>

        <Button variant={'enter'} redirectTo={authenticationUrl} />
      </CheckBoxAndButtonWrapper>

      <Divider />
    </LoginFormContainerBg>
  )
}

export default LoginFormContainer
