import { MenuWrapper, StyledLink } from './styles';

const Menu = () => {
  return (
    <MenuWrapper>
      <StyledLink exact to="/" activeClassName="active">
        Home
      </StyledLink>
      <StyledLink to="/favorites" activeClassName="active">
        About
      </StyledLink>
      <StyledLink to="/options" activeClassName="active">
        options
      </StyledLink>
    </MenuWrapper>
  );
};

export default Menu;
