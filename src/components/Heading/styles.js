import styled, { css } from 'styled-components'
import Colors from 'tokens/colors'
import { FontWeight as _fontWeight } from 'types/index'

const generalFontStyle = ({ fontSize, color, fontWeight, center, uppercase }) =>
  css`
    font-size: ${fontSize ? `${fontSize}px` : 'initial'};
    color: ${color ? color : Colors.vBlack};
    font-weight: ${fontWeight ? fontWeight : _fontWeight.normal};
    text-align: ${center ? 'center' : 'initial'};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `

export const StyledH1 = styled.h1`
  ${(props) => generalFontStyle(props)};
`
export const StyledH2 = styled.h2`
  ${(props) => generalFontStyle(props)};
`
export const StyledH3 = styled.h3`
  ${(props) => generalFontStyle(props)};
`
export const StyledH4 = styled.h4`
  ${(props) => generalFontStyle(props)};
`
export const StyledH5 = styled.h5`
  ${(props) => generalFontStyle(props)};
`
export const StyledH6 = styled.h6`
  ${(props) => generalFontStyle(props)};
`
