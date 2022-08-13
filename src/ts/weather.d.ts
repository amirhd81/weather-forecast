declare interface WeatherType {
  dt_txt: string;
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
    sea_level: number;
  };
  wind: {
    deg: number;
    gust: number;
    speed: number;
  }
}