import React from 'react'
import { ButtonWrapper } from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
