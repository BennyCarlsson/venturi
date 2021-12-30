import styled from "styled-components";
import { ReactComponent as XIcon } from "assets/icons/chevron-down.svg";
import Colors from "tokens/colors";

export const CloseIconButtonWrapper = styled.button`
  height: 38px;
  width: 38px;
  border-radius: 4px;
  padding: 0;
  border: none;
  background-color: ${Colors.vBlue};
  cursor: pointer;
`;

export const StyledXIcon = styled(XIcon)`
  stroke: ${Colors.white};
  transform: rotate(90deg);
`;
