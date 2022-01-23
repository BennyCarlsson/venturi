import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './locationsSlice'
import tripReducer from './tripSlice'
import tripListReducer from './tripListSlice'
import dialogReducer from './dialogSlice'
import { loadOriginAndDestination, loadTriplList } from '../utils/localStorage'

const localStorageDataTrip = loadOriginAndDestination()
const localStorageDataTripList = loadTriplList()

const store = configureStore({
  reducer: {
    trip: tripReducer,
    tripList: tripListReducer,
    locations: locationsReducer,
    dialog: dialogReducer,
  },
  preloadedState:
    localStorageDataTrip && localStorageDataTripList
      ? {
          trip: {
            origin: localStorageDataTrip.origin,
            destination: localStorageDataTrip.destination,
          },
          tripList: localStorageDataTripList,
        }
      : {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
