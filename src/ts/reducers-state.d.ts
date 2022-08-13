import { ReactNode } from "react";

declare interface GlobalReducerStateType {
  loading: boolean;
  loadingColor: string;
  mainModal: OpenModalWithContentPayload;
}
declare interface OpenModalWithContentPayload {
  open: boolean;
  content: ReactNode;
  title: string;
  onClose?: () => void;
}

declare interface WeatherForeCastReducerStateType {
  groupedWeatherData: WeatherType[][];
  selectedCitySunset?: number;
  selectedCitySunrise?: number;
}

declare interface GetFiveDayForecastPayload {
  groupedWeatherData: WeatherType[][];
  selectedCitySunset?: number;
  selectedCitySunrise?: number;
}
