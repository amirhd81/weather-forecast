import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalReducerStateType = {
  loading: false,
  loadingColor: "#fff",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    TOGGLE_LOADING_ON: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.loadingColor = payload ? payload : "#fff";
    },
    TOGGLE_LOADING_OFF: (state) => {
      state.loading = false;
    },
  },
});

export const { TOGGLE_LOADING_ON, TOGGLE_LOADING_OFF } = globalSlice.actions;
