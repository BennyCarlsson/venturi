import { configureStore } from '@reduxjs/toolkit';
import testReducer from './testSlice';
import tripReducer from './tripSlice';

const store = configureStore({
  reducer: { test: testReducer, trip: tripReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
