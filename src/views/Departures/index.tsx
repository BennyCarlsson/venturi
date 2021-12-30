import { showDialog } from 'redux/dialogSlice'
import CreateCommuteTripCta from './CreateCommuteTripCta'
import Heading from 'components/Heading'
import { DeparturesWrapper } from './styles'
import { useAppDispatch } from 'hooks/redux'

const Departures = () => {
  const dispatch = useAppDispatch()

  return (
    <DeparturesWrapper>
      <Heading headingType='h2'>Departures</Heading>
      <CreateCommuteTripCta
        onClick={() => {
          dispatch(showDialog())
        }}
      />
    </DeparturesWrapper>
  )
}

export default Departures
