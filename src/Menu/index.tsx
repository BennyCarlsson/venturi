import { ReactComponent as BookLogo } from "assets/icons/book-open.svg";
import { ReactComponent as TrainCar } from "assets/icons/train-car.svg";
import MenuDotsIcon from "components/MenuDotsIcon";
import { MenuWrapper, SpanOne, SpanThree, SpanTwo, StyledLink } from "./styles";

const Menu = () => {
  return (
    <MenuWrapper>
      <StyledLink exact to="/" activeClassName="active">
        <BookLogo />
        <SpanOne>Current table</SpanOne>
      </StyledLink>
      <StyledLink to="/departures" activeClassName="active">
        <TrainCar />
        <SpanTwo>Departures</SpanTwo>
      </StyledLink>
      <StyledLink to="/options" activeClassName="active">
        <MenuDotsIcon />
        <SpanThree>Options</SpanThree>
      </StyledLink>
    </MenuWrapper>
  );
};

export default Menu;
