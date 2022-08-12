import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { globalSlice } from "./Reducers";

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== "production",
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
