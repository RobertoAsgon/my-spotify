import styled from 'styled-components'

const InputWrapper = styled.input`
  &.variant-login {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    background-color: #fff;
    border: 1px solid #d9dadc;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      border-color: #919496;
      outline: 0;
    }
  }
`

const LabelWrapper = styled.label`
  font-weight: 700;
`

export { InputWrapper, LabelWrapper }
