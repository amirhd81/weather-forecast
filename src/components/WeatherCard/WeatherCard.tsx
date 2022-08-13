import React, { CSSProperties, FC } from "react";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

import classes from "./WeatherCard.module.css";

interface WeatherCardProps {
  weather: {
    main: string;
    description: string;
  };
  temp: number;
  feelsLike: number;
  time: string;
  style?: CSSProperties;
  onClickWeatherCard: () => void;
}

export const WeatherCard: FC<WeatherCardProps> = (props) => {
  const { weather, temp, feelsLike, time, style, onClickWeatherCard } = props;
  return (
    <div
      onClick={onClickWeatherCard}
      className={classes.Container}
      style={style}
    >
      <div className={classes.WeatherStatus}>
        <img
          alt="weather-icon"
          className={classes.WeatherIcon}
          src={getWeatherIcon(weather.main)}
        />
        <p className={classes.WeatherDes}>{weather.description}</p>
      </div>
      <p>Time: {time}</p>
      <p>Temp: {temp}</p>
      <p>Feels Like: {feelsLike}</p>
    </div>
  );
};
