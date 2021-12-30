import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import MotionParagraph from ".";

describe("<MotionParagraph />", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(<MotionParagraph>Texty text</MotionParagraph>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(<MotionParagraph>Texty text</MotionParagraph>);
    expect(screen).toBeTruthy();
  });

  it("should render text", () => {
    render(<MotionParagraph>Texty text</MotionParagraph>);
    expect(screen.getByText("Texty text")).toBeInTheDocument();
  });

  it("should render p tag", () => {
    render(<MotionParagraph>Texty text</MotionParagraph>);
    expect(
      screen.getByText("Texty text", { selector: "p" })
    ).toBeInTheDocument();
  });
});
