import styled from 'styled-components';
import { fontWeight as _fontWeight } from '.';

export const ParagraphWrapper = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  color: ${({ color }) => (color ? color : 'black')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : _fontWeight.normal)};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`;
