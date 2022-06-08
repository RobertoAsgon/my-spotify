import styled from 'styled-components'

const LoginContainerBg = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'section';
  grid-row-gap: 12px;
`

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #d9dadc;
`

const LoginHeader = styled.div`
  display: grid;
  grid-area: header;
  justify-items: center;

  svg {
    width: 200px;
    margin: 24px;
  }
`

const LoginSection = styled.div`
  grid-area: section;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  max-width: 450px;

  h5 {
    font-size: 14px;
    font-family: inherit;
    font-weight: 900;
    line-height: 1.1;
    color: inherit;
    margin-top: 24px;
    margin-bottom: 14px;
  }
`

const DividerWithText = styled(Divider)`
  line-height: 0px;
  margin: 16px 0;
  text-align: center;

  strong {
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 20px;
  }
`

const CheckBoxWrapper = styled.div`
  grid-area: checkbox;
  strong {
    margin-left: 8px;
  }
`

const CheckBoxAndButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: 'checkbox button';
  align-items: center;
  padding: 24px 0 24px;

  strong {
    color: #616467;
    font-weight: 400;
  }
`

const LinkForgotPass = styled.a`
  color: #616467;
  text-decoration: underline;
  :hover {
    color: #15883e;
    cursor: pointer;
  }
`

const LoginButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 10px;
`

const LoginFormContainerBg = styled.div`
  Input {
    margin-bottom: 16px;
    padding-left: 12px;
    font-size: 16px;
    line-height: 1.5;
    color: #222326;
    font-family: inherit;
  }
`

const SignupContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 4px;
  h4 {
    font-family: inherit;
    font-weight: 900;
    line-height: 1.1;
    color: inherit;
    margin-top: 32px;
    margin-bottom: 24px;
  }
`

export {
  LoginContainerBg,
  LoginHeader,
  LoginSection,
  Divider,
  DividerWithText,
  CheckBoxAndButtonWrapper,
  CheckBoxWrapper,
  LinkForgotPass,
  LoginButtonsContainer,
  LoginFormContainerBg,
  SignupContainer
}
