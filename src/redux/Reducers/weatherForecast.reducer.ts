import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFiveDayForecast } from "../../integrations/apiCalls/getFiveDayForecast";
import {
  GetFiveDayForecastPayload,
  WeatherForeCastReducerStateType,
} from "../../ts/reducers-state";
import { onGroupWeatherData } from "../PrepareFunctions";

const initialState: WeatherForeCastReducerStateType = {
  groupedWeatherData: [],
};

export const weatherForecastSlice = createSlice({
  name: "weatherForecast",
  initialState,
  reducers: {
    GET_FIVE_DAY_FORECAST: {
      reducer: (
        state,
        { payload }: PayloadAction<GetFiveDayForecastPayload>
      ) => {
        state.groupedWeatherData = payload.groupedWeatherData;
        state.selectedCitySunrise = payload.selectedCitySunrise;
        state.selectedCitySunset = payload.selectedCitySunset;
      },
      prepare: onGroupWeatherData
    },
  },
});

export const { GET_FIVE_DAY_FORECAST } = weatherForecastSlice.actions;
