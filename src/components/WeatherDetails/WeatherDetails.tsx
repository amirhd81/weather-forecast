import React, { FC } from "react";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import classes from "./WeatherDetails.module.css";

interface WeatherDetailsProps {
  data: WeatherType;
  selectedCitySunrise?: string;
  selectedCitySunset?: string;
}

export const WeatherDetails: FC<WeatherDetailsProps> = (props) => {
  const { data, selectedCitySunrise, selectedCitySunset } = props;

  return (
    <div className={classes.Container}>
      <img
        className={classes.WeatherIcon}
        src={getWeatherIcon(data.weather[0].main)}
        alt="weather-icon"
      />
      <div>
        <div>
          <p>{data.weather[0].description}</p>
          <p>
            The temperature is <span>{data.main.temp}°C</span> but it feels like{" "}
            <span>{data.main.feels_like}°C</span>.
          </p>
        </div>
        <div className={classes.Details}>
          <p>
            Humidity: <span>{data.main.humidity}%</span>
          </p>
          <p>
            Pressure: <span>{data.main.pressure} hPa</span>
          </p>
          <p>
            See Level: <span>{data.main.sea_level} hPa</span>
          </p>
          <p>
            Wind Degree: <span>{data.wind.deg}°</span>
          </p>
          <p>
            Wind Speed: <span>{data.wind.deg} m/s</span>
          </p>
          <p>
            Wind Gust: <span>{data.wind.gust} m/s</span>
          </p>
        </div>
        <div>
          {selectedCitySunrise && (
            <p>
              Sunrise: <span>{selectedCitySunrise}</span>
            </p>
          )}
          {selectedCitySunset && (
            <p>
              Sunset: <span>{selectedCitySunset}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
