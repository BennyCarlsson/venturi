import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import CreateCommuteTripCta from ".";

describe("<CreateCommuteTripCta />", () => {
  const onClick = jest.fn();
  it("should match snapshot", () => {
    const tree = renderer
      .create(<CreateCommuteTripCta onClick={onClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(<CreateCommuteTripCta onClick={onClick} />);
    expect(screen).toBeTruthy();
  });

  it("should call onClick onClick", () => {
    expect(onClick).not.toHaveBeenCalled();
    render(<CreateCommuteTripCta onClick={onClick} />);
    userEvent.click(screen.getByText("Create commute trip"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
