import { showDialog } from 'redux/dialogSlice'
import CreateCommuteTripCta from './CreateCommuteTripCta'
import Heading from 'components/Heading'
import { DeparturesWrapper } from './styles'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'
import { saveTripList } from 'utils/localStorage'

const Departures = () => {
  const dispatch = useAppDispatch()
  const tripList = useAppSelector((state) => state.tripList)

  useEffect(() => {
    saveTripList(tripList)
  }, [tripList])

  return (
    <DeparturesWrapper>
      <Heading headingType='h2'>Departures</Heading>
      {tripList.trips.map((trip, i) => (
        <div key={i}>
          --
          <p>{trip.destination?.name}</p>
          <p>{trip.origin?.name}</p>
          ---
        </div>
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
