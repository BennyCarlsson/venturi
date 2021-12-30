import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    show: false,
  },
  reducers: {
    showDialog: (state) => {
      state.show = true;
    },
    hideDialog: (state) => {
      state.show = false;
    },
  },
});

export const { showDialog, hideDialog } = dialogSlice.actions;

export const selectShowDialog = (state: RootState) => state.dialog.show;
export default dialogSlice.reducer;
