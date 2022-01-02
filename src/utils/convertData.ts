import { Trips } from 'redux/tripSlice'
import { GetTripResponse, Leg } from 'types'

export const convertRawTripData = (
  data: GetTripResponse
): Trips[] | undefined => {
  return data.TripList.Trip?.map((trip) => {
    if (!Array.isArray(trip.Leg)) {
      return [_leg(trip.Leg)]
    } else {
      return trip.Leg.map((leg) => _leg(leg))
    }
  })
}

const _leg = (leg: Leg) => ({
  id: leg.id,
  departureName: leg.Origin?.name,
  departureTrack: leg.Origin?.track,
  departureDate: leg.Origin?.date,
  departureTime: leg.Origin?.time,
  departureNewTime: leg.Origin?.rtTime,
  destinationName: leg.Destination?.name,
  number: leg.sname,
  direction: leg.direction,
})
