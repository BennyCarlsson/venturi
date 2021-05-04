import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTrip } from 'api/vasttrafik/vasttrafik';

type tripOrderType = {
  fromId: string;
  toId: string;
};
export const fetchTrip = createAsyncThunk('trip/fetchTrip', async (tripOrder: tripOrderType) => {
  const response = await getTrip(tripOrder.fromId, tripOrder.toId);
  return response;
});

export const tripSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('hello');

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = tripSlice.actions;

export default tripSlice.reducer;
