import { showDialog } from 'redux/dialogSlice'
import CreateCommuteTripCta from './CreateCommuteTripCta'
import { DeparturesWrapper } from './styles'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import TripListItem from 'components/TripListItem'

const Departures = () => {
  const dispatch = useAppDispatch()
  const tripList = useAppSelector((state) => state.tripList)

  return (
    <DeparturesWrapper>
      {tripList.trips.map((trip, i) => (
        <TripListItem key={trip.name} trip={trip} index={i} />
      ))}
      <CreateCommuteTripCta
        onClick={() => {
          dispatch(showDialog())
        }}
      />
    </DeparturesWrapper>
  )
}

export default Departures
