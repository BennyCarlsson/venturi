import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationsSlice';
import testReducer from './testSlice';
import tripReducer from './tripSlice';

const store = configureStore({
  reducer: { test: testReducer, trip: tripReducer, locations: locationsReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
