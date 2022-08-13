import { AppThunk } from "../../redux/config";
import { TOGGLE_LOADING_OFF, TOGGLE_LOADING_ON } from "../../redux/Reducers";
import { GET_FIVE_DAY_FORECAST } from "../../redux/Reducers/weatherForecast.reducer";
import { AxiosInstance } from "../baseApi";
import { END_POINTS } from "../endpoints";

export const getFiveDayForecast =
  (lat: number, lon: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(TOGGLE_LOADING_ON("#292929"));
      const res = await AxiosInstance.get(END_POINTS.fiveDayForecast(lat, lon));
      if (res.data) {
        dispatch(TOGGLE_LOADING_OFF());
        dispatch(
          GET_FIVE_DAY_FORECAST(
            res.data.list,
            res.data.city.sunrise,
            res.data.city.sunset
          )
        );
      }
    } catch (err) {
      dispatch(TOGGLE_LOADING_OFF());
    }
  };
