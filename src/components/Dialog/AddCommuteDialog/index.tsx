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
import IntroView from './IntroView'

type AddCommuteDialogProps = {
  isIntroView: boolean
}

const AddCommuteDialog = ({ isIntroView, ...props }: AddCommuteDialogProps) => {
  const dispatch = useAppDispatch()
  const [displayView, setDisplayView] = useState<
    'IntroView' | 'ChooseDestinationView' | 'NameCommuteView'
  >(isIntroView ? 'IntroView' : 'ChooseDestinationView')
  const [originLocation, setOriginLocation] = useState<Location | null>(null)
  const [name, setName] = useState('')
  const [destinationLocation, setDestinationLocation] =
    useState<Location | null>(null)

  const goToIntroView = () => {
    setDisplayView('IntroView')
  }

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
          name,
          origin: originLocation,
          destination: destinationLocation,
        })
      )
      saveOriginAndDestination({
        currentTripName: name,
        origin: originLocation,
        destination: destinationLocation,
      })
      dispatch(
        addTripToList({
          name: name,
          origin: originLocation,
          destination: destinationLocation,
        })
      )
      dispatch(hideDialog())
    }
  }
  return (
    <AddCommuteDialogWrapper {...props}>
      {displayView === 'IntroView' && (
        <IntroView goToChooseDestionationView={goToChooseDestinationView} />
      )}
      {displayView === 'ChooseDestinationView' && (
        <ChooseDestionationView
          goBack={() => {
            isIntroView ? goToIntroView() : dispatch(hideDialog())
          }}
          goToNameCommuteView={goToNameCommuteView}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
        />
      )}
      {displayView === 'NameCommuteView' && (
        <NameCommuteView
          name={name}
          setName={setName}
          createTrip={createTrip}
          goToChooseDestionationView={goToChooseDestinationView}
        />
      )}
    </AddCommuteDialogWrapper>
  )
}

export default AddCommuteDialog
