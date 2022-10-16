import { mockTripList } from 'mockData/tripList'
import { Location, LocationType } from './locationsSlice'
import redux from './store'
import reducer, { addTripToList, moveTripToFirst } from './tripListSlice'

describe('tripListSlice reducer', () => {
  it('should return the initial state', () => {
    const tripSlice = redux.getState().tripList
    const initialValue = { trips: [] }
    expect(tripSlice).toEqual(initialValue)
  })

  it('should addTripToList', () => {
    const state: { name?: string; origin: Location; destination: Location } = {
      name: 'TestName',
      destination: {
        id: '1',
        idx: '1',
        lat: '1',
        lon: '1',
        name: 'Destination Name',
        type: LocationType.CoordLocation,
      },
      origin: {
        id: '2',
        idx: '1',
        lat: '2',
        lon: '2',
        name: 'Origin name',
        type: LocationType.CoordLocation,
      },
    }

    redux.dispatch(addTripToList(state))
    const tripSlice = redux.getState().tripList
    expect(tripSlice).toEqual({ trips: [state] })
  })

  it('should addTripToList and get default name', () => {
    const originName = 'Origin Name'
    const state: { name?: string; origin: Location; destination: Location } = {
      destination: {
        id: '1',
        idx: '1',
        lat: '1',
        lon: '1',
        name: 'Destination Name',
        type: LocationType.CoordLocation,
      },
      origin: {
        id: '2',
        idx: '1',
        lat: '2',
        lon: '2',
        name: originName,
        type: LocationType.CoordLocation,
      },
    }
    redux.dispatch(addTripToList(state))
    const tripSlice = redux.getState().tripList
    expect(originName).toEqual(
      tripSlice.trips.find((trip) => trip.name === originName)?.name
    )
  })

  it('should return initial state', () => {
    expect(
      reducer(undefined, {
        type: undefined,
      })
    ).toEqual({ trips: [] })
  })

  it('should move trip first in list', () => {
    const result = reducer(mockTripList, moveTripToFirst({ index: 1 }))
    expect(mockTripList.trips[0]).toEqual(result.trips[1])
    expect(mockTripList.trips[1]).toEqual(result.trips[0])
  })
})
