import styled from "styled-components";
import Colors from "tokens/colors";

export const MenuDotsIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 4px 4px 4px;
  grid-template-rows: 4px 4px 4px;
  column-gap: 5px;
  row-gap: 5px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 1px;
  background-color: ${Colors.white};
`;
