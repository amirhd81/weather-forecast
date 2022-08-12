import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { Dropdown, WeatherData } from "../../components";
import classes from "./SearchWeatherForecast.module.css";

const cities = require("../../data/cities.json");

const mappedCities: CityType[] = cities.map((city: any) => ({
  ...city,
  value: city.name,
  label: city.name,
}));

export const SearchWeatherForecast = () => {
  const [selectedCity, setSelectedCity] =
    useState<SingleValue<CityType> | null>(null);

  const [groupedWeatherData, setGroupedWeatherData] = useState<any[]>([]);

  const splitDate = (date: string) => {
    return date.split(" ")[0];
  };

  const onGroupWeatherData = (dataList: any[]) => {
    const groupedData: any[] = [];
    let dataDailyBased: any[] = [];

    dataList.forEach((data) => {
      const dataDate = splitDate(data.dt_txt);

      if (!dataDailyBased.length) {
        return dataDailyBased.push(data);
      }

      if (
        splitDate(dataDailyBased[dataDailyBased.length - 1].dt_txt) === dataDate
      ) {
        return dataDailyBased.push(data);
      }

      groupedData.push(dataDailyBased);
      dataDailyBased = [];
      dataDailyBased.push(data);
    });

    setGroupedWeatherData(groupedData);
  };

  const onChangeCity = (selectedCity?: SingleValue<CityType>) => {
    if (!selectedCity) return;

    setSelectedCity(selectedCity);
  };

  useEffect(() => {
    if (!selectedCity) return;

    const AxiosInstance = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
    });
    https: AxiosInstance.get(
      `/forecast?lat=${selectedCity.lat}&lon=${selectedCity.lng}&appid=5902d95571c554f2994f0d48b25169ee&units=metric`
    )
      .then((res) => {
        onGroupWeatherData(res.data.list);
      })
      .catch((err) => console.log(err));
  }, [selectedCity]);

  return (
    <div className={classes.Container}>
      <Dropdown
        placeholder="Search"
        value={selectedCity}
        onChange={(selectedCity) => onChangeCity(selectedCity)}
        data={mappedCities}
      />
    </div>
  );
};
