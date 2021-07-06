export const GET_WEATHER = "GET_WEATHER";
export const ADD_CITY = "ADD_CITY";

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherState {
  data: WeatherData | null;
  error: string;
}

interface GetWeatherAC {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

export interface AddCityAC {
  type: typeof ADD_CITY;
  payload: any;
}

export type CitysAction = AddCityAC;

export type WeatherAction = GetWeatherAC;
