import moment from "moment";
import React, { FC } from "react";
import { ExpandMenu, GroupItem, WeatherCard } from "../";

interface WeatherProps {
  weatherData: {
    dt_txt: string;
    weather: {
      main: string;
      description: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
    };
  }[][];
}

export const WeatherData: FC<WeatherProps> = (props) => {
  const { weatherData } = props;

  return (
    <div>
      {weatherData.map((data, index) => (
        <ExpandMenu
          key={index}
          menuTitle={moment(data[0].dt_txt, "YYYY-MM-DD HH:mm:ss").format(
            "YYYY MMM Do"
          )}
          expandedComponent={
            <GroupItem
              row={4}
              width={540}
              items={data}
              itemComponent={(item, style, i) => (
                <WeatherCard
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
