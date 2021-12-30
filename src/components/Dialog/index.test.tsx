import Dialog from ".";
import { hideDialog } from "redux/dialogSlice";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch } from "react-redux";
import { cleanup, fireEvent, render, screen } from "testUtils/test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as {}),
  useDispatch: jest.fn(),
}));

describe("<Dialog />", () => {
  const useAppDispatch = jest.fn();
  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(useAppDispatch);
  });

  beforeEach(() => {
    render(<Dialog />, { initialState: { dialog: { show: true } } });
  });

  it("should match snapshot", () => {
    cleanup();
    const { asFragment } = render(<Dialog />, {
      initialState: { dialog: { show: true } },
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    expect(screen).toBeTruthy();
  });

  it("should call dispatch with hideDialog onClick", () => {
    userEvent.click(screen.getByTestId("close-dialog-button"));
    expect(useAppDispatch).toHaveBeenCalledWith(hideDialog());
    expect(useAppDispatch).toHaveBeenCalledTimes(1);
  });

  it("should call dispatch with hideDialog on Escape", () => {
    const dialog = screen.getByTestId("dialog-wrapper");
    fireEvent.keyDown(dialog, { key: "Escape", code: "Escape" });
    expect(useAppDispatch).toHaveBeenCalledWith(hideDialog());
    expect(useAppDispatch).toHaveBeenCalledTimes(1);
  });
});
