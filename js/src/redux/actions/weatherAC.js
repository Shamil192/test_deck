import {
  CURRENT_WEATHER,
  ADD_CITY,
  DEL_CITY,
  WEEKLY_WEATHER,
} from "../types/weatherTypes";

export const currentWeather = (coords) => {
  return {
    type: CURRENT_WEATHER,
    payload: coords,
  };
};

export const fetchCurrentWeater = (lat, lon) => async (dispatch) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=81a03fd3cfd8863bcad3a4f012b0857c`
  );
  const result = await response.json();
  dispatch(currentWeather(result));
};

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};

export const fetchAddCity = (city) => async (dispatch) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&APPID=81a03fd3cfd8863bcad3a4f012b0857c`
  );
  const result = await response.json();
  if (result.name) {
    dispatch(addCity(result));
  } else {
    alert("Такого города не существует, сори за алерт ");
  }
};

export const deleteCity = (ind) => {
  return {
    type: DEL_CITY,
    payload: ind,
  };
};

export const week = (city) => {
  return { type: WEEKLY_WEATHER, payload: city };
};

export const fetchWeek = (lat, lon) => async (dispatch) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&lang=ru&appid=81a03fd3cfd8863bcad3a4f012b0857c`
  );
  const result = await response.json();
  dispatch(week(result));
};
