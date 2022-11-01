import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getTrip } from 'api/vasttrafik/vasttrafik'
import { GetTripResponse } from 'types'
import { convertRawTripData } from 'utils/convertData'
import { Location } from './locationsSlice'

type tripOrderType = {
  fromId: string
  toId: string
}

export type Trip = {
  id?: string
  departureName?: string
  departureTrack?: string
  departureDate?: string
  departureTime?: string
  departureNewTime?: string
  newTime?: string
  destinationName?: string
  number?: string
  direction?: string
}

export type Trips = Trip[]

export const fetchTrip = createAsyncThunk(
  'trip/fetchTrip',
  async (tripOrder: tripOrderType, { signal }) => {
    const response = await getTrip(tripOrder.fromId, tripOrder.toId)
    return response
  }
)

export interface TripState {
  name?: string
  origin?: Location
  destination?: Location
  loading: boolean
  trips?: Trips[]
  error?: string
}

const initialState: TripState = {
  loading: true,
}

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setCurrentTable: (
      state,
      action: PayloadAction<{
        name: string
        origin: Location
        destination: Location
      }>
    ) => {
      state.name = action.payload.name || action.payload.origin.name
      state.origin = action.payload.origin
      state.destination = action.payload.destination
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrip.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.TripList.error) {
        state.error = action.payload.TripList.errorText
      } else {
        state.trips = convertRawTripData(action.payload as GetTripResponse)
      }
    })
  },
})

export const { setCurrentTable } = tripSlice.actions

export default tripSlice.reducer
