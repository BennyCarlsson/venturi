import styled from 'styled-components';
import Colors from 'tokens/colors';
import ClosedIconButton from 'components/CloseIconButton';

export const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px 8px 16px 8px;
  background-color: ${Colors.vBlue};
`;

export const InnerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${Colors.white};
`;

export const StyledClosedIconButton = styled(ClosedIconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
