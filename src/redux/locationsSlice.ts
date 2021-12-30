import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocationOName } from 'api/vasttrafik/vasttrafik'
import { LocationList } from 'types'

const _getLocationOName = async (
  name: string,
  { signal }: { signal: AbortSignal }
) => {
  signal.addEventListener('abort', () => {
    console.log('cancelled')
  })
  return getLocationOName(name, signal)
}

export const fetchDestinationLocationsOnName = createAsyncThunk(
  'locations/fetchDestinationLocationsOnName',
  _getLocationOName
)

export const fetchOriginLocationsOnName = createAsyncThunk(
  'locations/fetchOriginLocationsOnName',
  _getLocationOName
)

export enum LocationType {
  StopLocation,
  CoordLocation,
}

export type Location = {
  id: string
  idx: string
  name: string
  lat: string
  lon: string
  type: LocationType
}

// Todo extract and write tests
const convertData = (data: LocationList): Location[] | undefined => {
  console.log('data', data)
  let stopLocations: Location[] = []
  if (data.StopLocation) {
    if (!Array.isArray(data.StopLocation)) {
      data.StopLocation = [data.StopLocation]
    }
    stopLocations = data.StopLocation?.map((loc) => ({
      id: loc.id,
      idx: loc.idx,
      name: loc.name,
      lat: loc.lat,
      lon: loc.lon,
      type: LocationType.StopLocation,
    }))
  }

  let coordLocation: Location[] = []
  if (data.CoordLocation) {
    if (!Array.isArray(data.CoordLocation)) {
      data.CoordLocation = [data.CoordLocation]
    }
    coordLocation = data.CoordLocation?.map((loc) => ({
      id: loc.name,
      idx: loc.idx,
      name: loc.name,
      lat: loc.lat,
      lon: loc.lon,
      type: LocationType.CoordLocation,
    }))
  }
  return stopLocations
    .concat(coordLocation)
    .sort((a, b) => parseInt(a.idx) - parseInt(b.idx))
}

export interface TripState {
  loadingOrigin: boolean
  originLocations?: Location[]
  originError?: string
  loadingDestination: boolean
  destinationLocations?: Location[]
  destinationError?: string
}

const initialState: TripState = {
  loadingOrigin: false,
  loadingDestination: false,
}

const locationSearchSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOriginLocationsOnName.pending, (state, action) => {
      state.loadingOrigin = true
    })
    builder.addCase(fetchOriginLocationsOnName.fulfilled, (state, action) => {
      state.loadingOrigin = false
      if (action.payload.LocationList.error) {
        state.originError = action.payload.LocationList.errorText
      } else {
        state.originLocations = convertData(action.payload.LocationList)
      }
    })
    builder.addCase(
      fetchDestinationLocationsOnName.pending,
      (state, action) => {
        state.loadingDestination = true
      }
    )
    builder.addCase(
      fetchDestinationLocationsOnName.fulfilled,
      (state, action) => {
        state.loadingDestination = false
        if (action.payload.LocationList.error) {
          state.destinationError = action.payload.LocationList.errorText
        } else {
          state.destinationLocations = convertData(action.payload.LocationList)
        }
      }
    )
  },
})

export default locationSearchSlice.reducer
