import { SVGs } from "../assets";

export const getWeatherIcon = (type: string) => {
  switch (type) {
    case "Rain":
      return SVGs.RainIcon;
    case "Clear":
      return SVGs.ClearIcon;
    case "Clouds":
      return SVGs.CloudyIcon;
  }
};
