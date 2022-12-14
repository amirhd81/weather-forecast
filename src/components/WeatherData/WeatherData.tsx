import React, { FC } from "react";
import moment from "moment";
import { ExpandMenu, GroupItem, WeatherCard } from "../";
import classes from "./WeatherData.module.css";
import { useMediaQuery } from "react-responsive";

interface WeatherProps {
  weatherData: WeatherType[][];
  onClickWeatherCard: (data: WeatherType) => void;
}

export const WeatherData: FC<WeatherProps> = (props) => {
  const { weatherData, onClickWeatherCard } = props;

  const isMobileDevice = useMediaQuery({
    query: "(max-width: 27.5em)",
  });

  return (
    <div className={classes.WeatherData}>
      {weatherData.map((data, index) => (
        <ExpandMenu
          key={index}
          menuTitle={moment(data[0].dt_txt, "YYYY-MM-DD HH:mm:ss").format(
            "YYYY MMM Do"
          )}
          expandedComponent={
            <GroupItem
              row={isMobileDevice ? 2 : 4}
              percentage={isMobileDevice}
              width={isMobileDevice ? 100 : 540}
              items={data}
              itemComponent={(item, style, i) => (
                <WeatherCard
                  onClickWeatherCard={() => onClickWeatherCard(item)}
                  key={i}
                  style={style}
                  weather={item.weather[0]}
                  temp={item.main.temp}
                  feelsLike={item.main.feels_like}
                  time={moment(item.dt_txt, "YYYY-MM-DD HH:mm:ss").format(
                    "HH:mm"
                  )}
                />
              )}
            />
          }
        />
      ))}
    </div>
  );
};
