import styled from 'styled-components';
import Colors from 'tokens/colors';
import { FontWeight as _fontWeight } from 'types/index';

export const P = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  color: ${({ color }) => (color ? color : Colors.vBlack)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : _fontWeight.normal)};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
