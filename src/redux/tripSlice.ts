import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getTrip } from "api/vasttrafik/vasttrafik";
import { GetTripResponse } from "types";
import { Location } from "./locationsSlice";

type tripOrderType = {
  fromId: string;
  toId: string;
};
export const fetchTrip = createAsyncThunk(
  "trip/fetchTrip",
  async (tripOrder: tripOrderType, { signal }) => {
    const response = await getTrip(tripOrder.fromId, tripOrder.toId);
    return response;
  }
);

export type Trip = {
  id?: string;
  departureName?: string;
  departureTrack?: string;
  departureDate?: string;
  departureTime?: string;
  departureNewTime?: string;
  newTime?: string;
  destinationName?: string;
  number?: string;
  direction?: string;
};
const convertData = (data: GetTripResponse): Trip[] | undefined => {
  return data.TripList.Trip?.map((trip) => ({
    id: trip.Leg.id,
    departureName: trip.Leg.Origin?.name,
    departureTrack: trip.Leg.Origin?.track,
    departureDate: trip.Leg.Origin?.date,
    departureTime: trip.Leg.Origin?.time,
    departureNewTime: trip.Leg.Origin?.rtTime,
    destinationName: trip.Leg.Destination?.name,
    number: trip.Leg.sname,
    direction: trip.Leg.direction,
  }));
};
export interface TripState {
  origin?: Location;
  destination?: Location;
  loading: boolean;
  trips?: Trip[];
  error?: string;
}

const initialState: TripState = {
  loading: true,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setCurrentTable: (
      state,
      action: PayloadAction<{ origin: Location; destination: Location }>
    ) => {
      state.origin = action.payload.origin;
      state.destination = action.payload.destination;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrip.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.TripList.error) {
        state.error = action.payload.TripList.errorText;
      } else {
        state.trips = convertData(action.payload as GetTripResponse);
      }
    });
  },
});

export const { setCurrentTable } = tripSlice.actions;

export default tripSlice.reducer;
