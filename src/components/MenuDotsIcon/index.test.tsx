import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import MenuDotsIcon from ".";

describe("<MenuDotsIcon />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<MenuDotsIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(<MenuDotsIcon />);
    expect(screen).toBeTruthy();
  });
});
