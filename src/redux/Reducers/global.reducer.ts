import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GlobalReducerStateType,
  OpenModalWithContentPayload,
} from "../../ts/reducers-state";
import { AppThunk } from "../config";

const initialState: GlobalReducerStateType = {
  loading: false,
  loadingColor: "#fff",
  mainModal: {
    content: null,
    title: "",
    open: false,
    onClose: () => {},
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    TOGGLE_LOADING_ON: (state, { payload }: PayloadAction<string>) => {
      state.loading = true;
      state.loadingColor = payload ? payload : "#fff";
    },
    TOGGLE_LOADING_OFF: (state) => {
      state.loading = false;
    },
    OPEN_MODAL_WITH_CUSTOM_CONTENT: (
      state,
      { payload }: PayloadAction<OpenModalWithContentPayload>
    ) => {
      state.mainModal = {
        content: payload.content,
        title: payload.title,
        open: payload.open,
        onClose: payload.onClose,
      };
    },
    CLOSE_MODAL: (state) => {
      state.mainModal = initialState.mainModal;
    },
  },
});

export const {
  TOGGLE_LOADING_ON,
  TOGGLE_LOADING_OFF,
  OPEN_MODAL_WITH_CUSTOM_CONTENT,
  CLOSE_MODAL,
} = globalSlice.actions;
