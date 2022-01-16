import { useState } from 'react'
import ChooseDestionationView from './ChooseDestionationView'
import NameCommuteView from './NameCommuteView'
import { AddCommuteDialogWrapper } from './styles'
import { Location } from 'redux/locationsSlice'
import { useAppDispatch } from 'hooks/redux'
import { setCurrentTable } from 'redux/tripSlice'
import { saveOriginAndDestination } from 'utils/localStorage'
import { hideDialog } from 'redux/dialogSlice'
import { addTripToList } from 'redux/tripListSlice'

type AddCommuteDialogProps = {}

const AddCommuteDialog = (props: AddCommuteDialogProps) => {
  const dispatch = useAppDispatch()
  const [displayView, setDisplayView] = useState<
    'ChooseDestinationView' | 'NameCommuteView'
  >('ChooseDestinationView')
  const [originLocation, setOriginLocation] = useState<Location | null>(null)
  const [destinationLocation, setDestinationLocation] =
    useState<Location | null>(null)

  const goToNameCommuteView = () => {
    setDisplayView('NameCommuteView')
  }

  const goToChooseDestinationView = () => {
    setDisplayView('ChooseDestinationView')
  }

  const createTrip = () => {
    if (originLocation && destinationLocation) {
      dispatch(
        setCurrentTable({
          origin: originLocation,
          destination: destinationLocation,
        })
      )
      saveOriginAndDestination({
        origin: originLocation,
        destination: destinationLocation,
      })
      dispatch(
        addTripToList({
          origin: originLocation,
          destination: destinationLocation,
        })
      )
      dispatch(hideDialog())
    }
  }
  return (
    <AddCommuteDialogWrapper {...props}>
      {displayView === 'ChooseDestinationView' && (
        <ChooseDestionationView
          goToNameCommuteView={goToNameCommuteView}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
        />
      )}
      {displayView === 'NameCommuteView' && (
        <NameCommuteView
          createTrip={createTrip}
          goToChooseDestionationView={goToChooseDestinationView}
        />
      )}
    </AddCommuteDialogWrapper>
  )
}

export default AddCommuteDialog
