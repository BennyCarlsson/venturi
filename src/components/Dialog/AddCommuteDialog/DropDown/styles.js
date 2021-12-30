import styled from "styled-components";
import Colors from "tokens/colors";

export const Ul = styled.ul`
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: ${Colors.white};
  list-style: none;
  margin: 0;
  padding: 8px;
  border: 1px solid #726a95;
`;

export const Li = styled.li`
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;
