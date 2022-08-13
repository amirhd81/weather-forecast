import { Action, configureStore, Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import thunk, { ThunkAction } from "redux-thunk";

import { globalSlice } from "./Reducers";
import { weatherForecastSlice } from "./Reducers/weatherForecast.reducer";

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    weatherForecast: weatherForecastSlice.reducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== "production",
});

type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<Dispatch<any>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
