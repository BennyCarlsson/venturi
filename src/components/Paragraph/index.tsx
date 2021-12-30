import React from 'react'
import { FontWeight } from 'types'
import { P } from './styles'

export type ParagraphProps = {
  children?: React.ReactNode
  fontSize?: number
  fontWeight?: FontWeight
  color?: string
  center?: boolean
  uppercase?: boolean
}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return <P {...props}>{children}</P>
}

export default Paragraph
