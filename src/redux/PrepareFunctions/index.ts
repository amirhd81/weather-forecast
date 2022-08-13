const splitDate = (date: string) => {
  return date.split(" ")[0];
};

export const onGroupWeatherData = (
  dataList: WeatherType[],
  selectedCitySunrise: number,
  selectedCitySunset: number
) => {
  const groupedWeatherData: WeatherType[][] = [];
  let dataDailyBased: WeatherType[] = [];

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

    groupedWeatherData.push(dataDailyBased);
    dataDailyBased = [];
    dataDailyBased.push(data);
  });

  return {
    payload: {
      groupedWeatherData,
      selectedCitySunset,
      selectedCitySunrise,
    },
  };
};
