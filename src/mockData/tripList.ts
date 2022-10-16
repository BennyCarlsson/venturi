import { LocationType } from 'redux/locationsSlice'
import { TripListState } from 'redux/tripListSlice'

export const mockTripList: TripListState = {
  trips: [
    {
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
    },
    {
      name: 'TestName2',
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
    },
    {
      name: 'TestName3',
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
    },
  ],
}
