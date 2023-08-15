import { DateTime } from "luxon";
import dotenv from "dotenv"; // Import the dotenv package

dotenv.config({ path: "../../.env" }); // Load environment variables from .env file

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Use the loaded environment variable
const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL; // Use the loaded environment variable
 

// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   return fetch(url).then((res) => res.json());
// };

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
///destructuring the array data coming from api
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  // Make sure daily and hourly arrays are defined before using slice and map
  if (daily && hourly) {
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });

    hourly = hourly.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
  } else {
    // Handle the case where daily or hourly arrays are not defined as expected
    daily = [];
    hourly = [];
  }

  return { timezone, daily, hourly };
};

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   const { lat, lon } = formatCurrentWeather;

//   const formattedForcastWeather = await getWeatherData("oncall", {
//     lat,
//     lon,
//     exclude: "current,minutely,alerts",
//     units:searchParams.units,
//   }).then(formatForecastWeather);
//   return {...formatCurrentWeather,...formatForecastWeather};
// };

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await formatCurrentWeather(
    await getWeatherData("weather", searchParams)
  );

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await formatForecastWeather(
    await getWeatherData("oncall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    })
  );

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc,dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export { formatToLocalTime, iconUrlFromCode };

export default getFormattedWeatherData;
