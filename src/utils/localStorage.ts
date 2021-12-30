import { Location } from 'redux/locationsSlice'

export const saveOriginAndDestination = (state: {
  origin: Location
  destination: Location
}) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log('Error: ', error)
  }
}

export const loadOriginAndDestination = ():
  | { origin: Location; destination: Location }
  | undefined => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.log('Error: ', error)
  }
}
