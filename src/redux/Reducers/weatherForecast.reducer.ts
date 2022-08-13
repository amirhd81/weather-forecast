import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
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
        if (payload.selectedCitySunrise) {
          state.selectedCitySunrise = moment
            .unix(payload.selectedCitySunrise)
            .format("HH:mm");
        }
        if (payload.selectedCitySunset) {
          state.selectedCitySunset = moment
            .unix(payload.selectedCitySunset)
            .format("HH:mm");
        }
      },
      prepare: onGroupWeatherData,
    },
  },
});

export const { GET_FIVE_DAY_FORECAST } = weatherForecastSlice.actions;
