import styled from 'styled-components'
import { ButtonProps } from './Button'

const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 50px;
  border-radius: 500px;
  border: none;
  cursor: pointer;
  font-weight: 700;

  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;

  span {
    margin: 0 14px;
    font-size: 14px;
    line-height: 1;
    font-weight: 700px;
    font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
    letter-spacing: 2px;
    min-width: 160px;
  }

  svg {
    margin-left: 14px;
  }

  /* Facebook */
  &.variant-facebook {
    color: #ffff;
    background-color: #3b5998;
  }

  &.variant-facebook:hover {
    background-color: #3a61b3;
  }

  /* Apple */
  &.variant-apple {
    color: #ffff;
    background-color: #000;
  }

  &.variant-apple:hover {
    background-color: #333;
  }

  /* Enter Login */
  &.variant-enter {
    color: #ffff;
    background-color: #15883e;
  }

  &.variant-enter:hover {
    background-color: #1db954;
  }

  /* Outlined */
  &.variant-outlined,
  &.variant-googleOutlined,
  &.variant-phoneOutlined,
  &.variant-signUpOutlined {
    color: #616467;
    background-color: #ffff;
    box-shadow: inset 0 0 0 2px #616467;
  }

  &.variant-outlined:hover,
  &.variant-googleOutlined:hover,
  &.variant-phoneOutlined:hover,
  &.variant-signUpOutlined:hover {
    color: #ffff;
    background-color: #616467;
  }
`

export { ButtonWrapper }
