import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Departures from ".";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("<Departures />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Departures />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(<Departures />);
    expect(screen).toBeTruthy();
  });
});
