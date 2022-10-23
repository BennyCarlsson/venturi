import store from './store'
import {
  DialogType,
  hideDialog,
  showDialog,
  showIntroDialog,
} from './dialogSlice'

describe('dialogSlice', () => {
  it('should return initial state', () => {
    const initialState: DialogType = { show: false, isIntro: false }
    const state = store.getState().dialog
    expect(state).toEqual(initialState)
  })

  it('should dispatch showDialog', () => {
    store.dispatch(showDialog())
    const state = store.getState().dialog
    const expectedState: DialogType = { show: true, isIntro: false }
    expect(state).toEqual(expectedState)
  })

  it('should dispatch showIntroDialog', () => {
    store.dispatch(showIntroDialog())
    const state = store.getState().dialog
    const expectedState: DialogType = { show: true, isIntro: true }
    expect(state).toEqual(expectedState)
  })

  it('should dispatch hideDialog after showIntroDialog', () => {
    store.dispatch(showDialog())
    store.dispatch(hideDialog())
    const state = store.getState().dialog
    const expectedState: DialogType = { show: false, isIntro: false }
    expect(state).toEqual(expectedState)
  })
})
