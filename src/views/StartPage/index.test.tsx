import { render } from "@testing-library/react";
import StartPage from ".";
import { TripState } from "redux/tripSlice";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const state: TripState = {
  loading: false,
  trips: [
    {
      id: "123",
      departureName: "name",
      departureTrack: "track",
      departureDate: "2021-05-08",
      departureTime: "15:30",
      departureNewTime: "15:31",
      destinationName: "destination name",
      number: "18",
      direction: "direction",
    },
    {
      id: "132",
      departureName: "name",
      departureTrack: "track",
      departureDate: "2021-05-08",
      departureTime: "15:35",
      departureNewTime: "15:38",
      destinationName: "destination name",
      number: "18",
      direction: "direction",
    },
    {
      id: "321",
      departureName: "name",
      departureTrack: "track",
      departureDate: "2021-05-08",
      departureTime: "15:30",
      departureNewTime: "15:31",
      destinationName: "destination name",
      number: "18",
      direction: "direction",
    },
    {
      id: "213",
      departureName: "name",
      departureTrack: "track",
      departureDate: "2021-05-08",
      departureTime: "15:30",
      departureNewTime: "15:31",
      destinationName: "destination name",
      number: "18",
      direction: "direction",
    },
  ],
};

describe("<StartPage />", () => {
  it("should match snapshot", () => {
    (useSelector as jest.Mock).mockReturnValueOnce(state.trips);
    (useDispatch as jest.Mock).mockReturnValue(() => {});
    const { asFragment } = render(<StartPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
