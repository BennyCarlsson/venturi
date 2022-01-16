import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './locationsSlice'
import tripReducer from './tripSlice'
import tripListReducer from './tripListSlice'
import dialogReducer from './dialogSlice'
import { loadOriginAndDestination } from '../utils/localStorage'

const localStorageData = loadOriginAndDestination()

const store = configureStore({
  reducer: {
    trip: tripReducer,
    tripList: tripListReducer,
    locations: locationsReducer,
    dialog: dialogReducer,
  },
  preloadedState: localStorageData
    ? {
        trip: {
          origin: localStorageData.origin,
          destination: localStorageData.destination,
        },
      }
    : {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
