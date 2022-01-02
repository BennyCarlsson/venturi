import { convertRawTripData } from './convertData'
import {
  TripsConvertedOne,
  TripsConvertedTwo,
  TripsRawOne,
  TripsRawTwo,
} from 'mockData/trips'

describe('tripSlice reducer', () => {
  it('should convert trip data', () => {
    const data = convertRawTripData(TripsRawOne)
    expect(data).toEqual(TripsConvertedOne)
  })

  it('should different convert trip data', () => {
    const data = convertRawTripData(TripsRawTwo)
    expect(data).toEqual(TripsConvertedTwo)
  })
})
