import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from 'tokens/colors'

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;
  background-color: ${Colors.vBlack};
`

export const StyledLink = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: ${Colors.white};
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
`

export const SpanOne = styled.span`
  margin-top: 5px;
`
export const SpanTwo = styled.span`
  margin-top: 7px;
`

export const SpanThree = styled.span`
  margin-top: 5px;
`
