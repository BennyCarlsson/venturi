import { showDialog } from 'redux/dialogSlice'
import CreateCommuteTripCta from './CreateCommuteTripCta'
import { DeparturesWrapper } from './styles'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'
import { saveTripList } from 'utils/localStorage'
import TripListItem from 'components/TripListItem'

const Departures = () => {
  const dispatch = useAppDispatch()
  const tripList = useAppSelector((state) => state.tripList)

  useEffect(() => {
    saveTripList(tripList)
  }, [tripList])

  return (
    <DeparturesWrapper>
      {tripList.trips.map((trip, i) => (
        <TripListItem key={i} trip={trip} />
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
