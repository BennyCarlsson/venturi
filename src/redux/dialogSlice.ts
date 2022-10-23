import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type DialogType = {
  show: boolean
  isIntro: boolean
}
const initialState: DialogType = {
  show: false,
  isIntro: false,
}
const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showDialog: (state) => {
      state.show = true
      state.isIntro = false
    },
    showIntroDialog: (state) => {
      state.show = true
      state.isIntro = true
    },
    hideDialog: (state) => {
      state.show = false
      state.isIntro = false
    },
  },
})

export const { showDialog, showIntroDialog, hideDialog } = dialogSlice.actions

export const selectShowDialog = (state: RootState) => state.dialog.show
export const selectIsIntro = (state: RootState) => state.dialog.isIntro
export default dialogSlice.reducer
