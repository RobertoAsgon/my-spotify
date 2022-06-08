import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './styles'

interface CheckBoxProps {
  variant?: string
  checked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelWrap?: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  variant,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} className={`variant-${variant}`}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )

  return labelWrap ? <label>{content}</label> : <>{content}</>
}

export default CheckBox
