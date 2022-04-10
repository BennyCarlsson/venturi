import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Location } from './locationsSlice'

export interface TripListState {
  trips: { name: string; origin: Location; destination: Location }[]
}

const initialState: TripListState = { trips: [] }

const tripListSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTripToList: (
      state,
      action: PayloadAction<{
        name?: string
        origin: Location
        destination: Location
      }>
    ) => {
      state.trips.push({
        name: action.payload.name ?? action.payload.origin.name,
        origin: action.payload.origin,
        destination: action.payload.destination,
      })
    },
  },
})

export const { addTripToList } = tripListSlice.actions

export default tripListSlice.reducer
