import React, { ReactNode } from 'react'
import { ButtonWrapper } from './styles'
import { PAGES_URL } from '../../../services/Constants'
import { CustomSVG } from '../CustomSVG'
import { Apple, Facebook, Google } from '../../assets'

export interface ButtonProps {
  variant?: string
  redirectTo?: PAGES_URL | string
  iconColor?: string | null
}

interface variantTypesProps {
  [key: string]: variantTypeInfo
}

class variantTypeInfo {
  constructor(public icon: ReactNode, public label: string) {}
}

const Button: React.FC<ButtonProps> = ({ redirectTo, variant, iconColor }) => {
  const handleVariantTypes = () => {
    const variantTypes: variantTypesProps = {
      facebook: new variantTypeInfo(<Facebook />, 'CONTINUAR COM O FACEBOOK'),
      apple: new variantTypeInfo(<Apple />, 'CONTINUAR COM APPLE'),
      googleOutlined: new variantTypeInfo(<Google />, 'CONTINUAR COM O GOOGLE'),
      phoneOutlined: new variantTypeInfo(
        null,
        'CONTINUAR COM UM NÚMERO DE TELEFONE'
      ),
      signUpOutlined: new variantTypeInfo(null, 'INSCREVER-SE NO SPOTIFY'),
      enter: new variantTypeInfo(null, 'ENTRAR')
    }

    if (variant) return variantTypes[variant]
  }

  const ButtonWrapped = () => (
    <ButtonWrapper className={`variant-${variant}`}>
      <CustomSVG width={22} height={22} htmlColor={iconColor}>
        {handleVariantTypes()?.icon}
      </CustomSVG>
      <span>{handleVariantTypes()?.label}</span>
    </ButtonWrapper>
  )

  return redirectTo ? (
    <a href={redirectTo}>
      <ButtonWrapped />
    </a>
  ) : (
    <>
      <ButtonWrapped />
    </>
  )
}

export default Button
