import { fetchTrip, Trip, Trips } from 'redux/tripSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { Fragment, useEffect, useState } from 'react'
import DepartureBox from './DepartureBox'
import OtherDepartures from './OtherDepartures'
import { StartPageWrapper } from './styles'
import TimeBox from './TimeBox'

//const spaldingsgatan = '9021014006160000';
//const lillaBommen = '9021014004380000';
//const nordstan = '9021014004945000';
//const shouldShowRtTime = () => Origin?.rtTime !== Origin?.time;

const StartPage = () => {
  const dispatch = useAppDispatch()
  const currentTripName = useAppSelector((state) => state.trip.currentTripName)
  const origin = useAppSelector((state) => state.trip.origin)
  const destination = useAppSelector((state) => state.trip.destination)
  const trips = useAppSelector((state) => state.trip.trips)
  const error = useAppSelector((state) => state.trip.error)
  const [showOtherDepartures, setShowOtherDepartures] = useState(false)

  const handleShowOtherDeparturesClick = () => {
    setShowOtherDepartures((prevState) => !prevState)
  }

  useEffect(() => {
    // Todo: check type some placec can't be searcherd on id
    if (origin?.id && destination?.id) {
      dispatch(fetchTrip({ fromId: origin?.id, toId: destination?.id }))
    }
  }, [dispatch, origin, destination])

  function filterOutDublicateDepartures(trips: Trips[]) {
    let seen = new Set()
    return trips.filter((trip) => {
      let key = (trip as Trip).id ?? ((trip as Trips)[0].id as string)
      return seen.has(key) ? false : seen.add(key)
    })
  }

  return (
    <StartPageWrapper>
      {/* !Array.isArray(trips[0]) handle when trips[0] is Trips[] */}
      {trips && trips.length > 0 && (
        <Fragment>
          {/* Todo: rtTrack */}
          <DepartureBox
            name={currentTripName}
            departureName={trips[0][0].departureName}
            track={trips[0][0].departureTrack}
            slim={showOtherDepartures}
          />
          <TimeBox
            date={trips[0][0].departureDate}
            time={trips[0][0].departureTime}
            rtTime={trips[0][0].departureNewTime}
            location={trips[0][0].destinationName}
            number={trips[0][0].number}
            direction={trips[0][0].direction}
          />
          <OtherDepartures
            trips={filterOutDublicateDepartures(trips).slice(1, 4)}
            handleOnClick={handleShowOtherDeparturesClick}
            showContent={showOtherDepartures}
          />
        </Fragment>
      )}
      {error && <h2>{error}</h2>}
    </StartPageWrapper>
  )
}

export default StartPage
