type END_POINTS_TYPES = {
    fiveDayForecast: (lat: number, lon: number) => string;
};

export const END_POINTS: END_POINTS_TYPES = {
    fiveDayForecast: (lat, lon) => `/forecast?lat=${lat}&lon=${lon}&appid=5902d95571c554f2994f0d48b25169ee&units=metric`
};
