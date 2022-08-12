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

  const onChangeCity = (selectedCity?: SingleValue<CityType>) => {
    if (!selectedCity) return;

    setSelectedCity(selectedCity);
  };

  useEffect(() => {
    if (!selectedCity) return;

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
