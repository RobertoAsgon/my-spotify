import React from 'react'
import { LogoSpotify } from '../../shared/assets'
import { CustomSVG } from '../../shared/components'
import { Button } from '../../shared/components/Button'
import LoginFormContainer from './LoginFormContainer'

import {
  Divider,
  LoginContainerBg,
  LoginHeader,
  LoginSection,
  DividerWithText,
  LoginButtonsContainer,
  SignupContainer
} from './styles'

const LoginContainer: React.FC = () => {
  return (
    <LoginContainerBg>
      <LoginHeader>
        <CustomSVG>
          <LogoSpotify />
        </CustomSVG>
        <Divider />
      </LoginHeader>

      <LoginSection>
        <h5>Para continuar, faça login no Spotify.</h5>

        <LoginButtonsContainer>
          <Button variant={'facebook'} iconColor="white" />

          <Button variant={'apple'} iconColor="white" />

          <Button variant={'googleOutlined'} />

          <Button variant={'phoneOutlined'} />

          <DividerWithText>
            <strong>OU</strong>
          </DividerWithText>
        </LoginButtonsContainer>

        <LoginFormContainer />

        <SignupContainer>
          <h4>Não tem uma conta?</h4>

          <Button variant={'signUpOutlined'} />
        </SignupContainer>
      </LoginSection>
    </LoginContainerBg>
  )
}

export default LoginContainer
