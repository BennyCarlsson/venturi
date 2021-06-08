import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '../redux/locationsSlice';
import testReducer from '../redux/testSlice';
import tripReducer from '../redux/tripSlice';
import dialogReducer from '../redux/dialogSlice';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { RootState } from 'redux/store';

type RenderOptionsType = { initialState?: Partial<RootState> } & Omit<RenderOptions, 'queries'>;
function render(ui: ReactElement, { initialState = {}, ...renderOptions }: RenderOptionsType) {
  const store = configureStore({
    reducer: {
      test: testReducer,
      trip: tripReducer,
      locations: locationsReducer,
      dialog: dialogReducer
    },
    preloadedState: initialState
  });
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
