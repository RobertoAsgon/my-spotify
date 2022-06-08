import React from 'react'
import { InputWrapper, LabelWrapper } from './styles'

interface InputProps {
  variant: string
  placeholder: string
}

const Input: React.FC<InputProps> = ({ variant, placeholder }) => {
  return (
    <>
      <LabelWrapper htmlFor={variant}>{placeholder}</LabelWrapper>
      <InputWrapper
        id={variant}
        className={`variant-${variant}`}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
