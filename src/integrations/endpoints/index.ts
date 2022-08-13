import { weatherAppId } from "../../settings";

type END_POINTS_TYPES = {
    fiveDayForecast: (lat: number, lon: number) => string;
};

export const END_POINTS: END_POINTS_TYPES = {
    fiveDayForecast: (lat, lon) => `/forecast?lat=${lat}&lon=${lon}&appid=${weatherAppId}&units=metric`
};
