import React, { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { Dropdown, WeatherData, WeatherDetails } from "../../components";
import { getFiveDayForecast } from "../../integrations/apiCalls/getFiveDayForecast";
import { useAppDispatch, useAppSelector } from "../../redux/config";
import { OPEN_MODAL_WITH_CUSTOM_CONTENT } from "../../redux/Reducers";
import classes from "./SearchWeatherForecast.module.css";

const cities = require("../../data/cities.json");

const mappedCities: CityType[] = cities.map((city: any) => ({
  ...city,
  value: city.name,
  label: city.name,
}));

export const SearchWeatherForecast = () => {
  const dispatch = useAppDispatch();
  const [selectedCity, setSelectedCity] =
    useState<SingleValue<CityType> | null>(null);

  const weatherForecast = useAppSelector((state) => state.weatherForecast);
  const { groupedWeatherData, selectedCitySunrise, selectedCitySunset } =
    weatherForecast;

  useEffect(() => {
    if (!selectedCity) return;
    dispatch(getFiveDayForecast(selectedCity.lat, selectedCity.lng));
  }, [selectedCity, dispatch]);

  const onChangeCity = (selectedCity?: SingleValue<CityType>) => {
    if (!selectedCity) return;

    setSelectedCity(selectedCity);
  };

  const onClickWeatherCard = (data: WeatherType) => {
    dispatch(
      OPEN_MODAL_WITH_CUSTOM_CONTENT({
        open: true,
        title: "Weather Details",
        content: (
          <WeatherDetails
            selectedCitySunrise={selectedCitySunrise}
            selectedCitySunset={selectedCitySunset}
            data={data}
          />
        ),
      })
    );
  };

  return (
    <div className={classes.Container}>
      <Dropdown
        placeholder="Search"
        value={selectedCity}
        onChange={(selectedCity) => onChangeCity(selectedCity)}
        data={mappedCities}
      />

      {groupedWeatherData.length ? (
        <WeatherData
          onClickWeatherCard={onClickWeatherCard}
          weatherData={groupedWeatherData}
        />
      ) : null}
    </div>
  );
};
