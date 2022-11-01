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
      state.trips.unshift({
        name: action.payload.name || action.payload.origin.name,
        origin: action.payload.origin,
        destination: action.payload.destination,
      })
    },
    moveTripToFirst: (state, action: PayloadAction<{ index: number }>) => {
      const index = action.payload.index
      const trip = state.trips[index]
      state.trips.splice(index, 1)
      state.trips.unshift(trip)
      return state
    },
  },
})

export const { addTripToList, moveTripToFirst } = tripListSlice.actions

export default tripListSlice.reducer
