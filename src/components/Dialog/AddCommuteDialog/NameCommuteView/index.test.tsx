import userEvent from "@testing-library/user-event";
import { render, screen } from "testUtils/test-utils";
import NameCommuteView from ".";

describe("<NameCommuteView />", () => {
  const mockCreateTrip = jest.fn();
  const mockGoToChooseDestionationView = jest.fn();

  beforeEach(() => {
    render(
      <NameCommuteView
        createTrip={mockCreateTrip}
        goToChooseDestionationView={mockGoToChooseDestionationView}
      />,
      {}
    );
  });

  it("should match snapshot", () => {
    const { asFragment } = render(
      <NameCommuteView
        createTrip={mockCreateTrip}
        goToChooseDestionationView={mockGoToChooseDestionationView}
      />,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    render(
      <NameCommuteView
        createTrip={mockCreateTrip}
        goToChooseDestionationView={mockGoToChooseDestionationView}
      />,
      {}
    );
    expect(screen).toBeTruthy();
  });

  it("should call mockCreatTrip on", () => {
    expect(mockCreateTrip).not.toHaveBeenCalled();
    userEvent.click(
      screen.getByRole("button", { name: "Create Commute trip" })
    );
    expect(mockCreateTrip).toBeCalledTimes(1);
  });

  it("should call mockGoToChoseDestinationView", () => {
    expect(mockGoToChooseDestionationView).not.toHaveBeenCalled();
    userEvent.click(screen.getByTestId("close-dialog-button"));
    expect(mockGoToChooseDestionationView).toBeCalledTimes(1);
  });
});
