import { Location, LocationType } from "./locationsSlice";
import redux from "./store";
import { setCurrentTable } from "./tripSlice";

describe("tripSlice reducer", () => {
  it("should return the initial state", () => {
    const tripSlice = redux.getState().trip;
    const initialValue = { loading: true };
    expect(tripSlice).toEqual(initialValue);
  });

  it("should set current table", () => {
    const state: { origin: Location; destination: Location } = {
      destination: {
        id: "1",
        idx: "1",
        lat: "1",
        lon: "1",
        name: "Destination Name",
        type: LocationType.CoordLocation,
      },
      origin: {
        id: "2",
        idx: "1",
        lat: "2",
        lon: "2",
        name: "Origin name",
        type: LocationType.CoordLocation,
      },
    };

    redux.dispatch(setCurrentTable(state));
    const tripSlice = redux.getState().trip;
    expect(tripSlice).toEqual({ loading: true, ...state });
  });
});
