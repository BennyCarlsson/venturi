import styled from 'styled-components';
import { ReactComponent as XIcon } from 'assets/icons/x.svg';
import Colors from 'tokens/colors';

export const CloseIconButtonWrapper = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledXIcon = styled(XIcon)`
  stroke: ${Colors.vBlack};
`;
