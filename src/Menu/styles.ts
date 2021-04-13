import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Colors from 'tokens/colors';

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  background-color: ${Colors.vBlack};
`;

export const StyledLink = styled(NavLink)`
  font-size: 14px;
  color: ${Colors.white};
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
`;
