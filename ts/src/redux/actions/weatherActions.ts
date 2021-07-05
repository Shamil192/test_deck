import { ThunkAction } from "redux-thunk";
import {
  GET_WEATHER,
  SET_ERROR,
  WeatherAction,
  WeatherData,
  WeatherError,
} from "../types";
import rootReducer, { RootState } from "../reducers/rootReducer";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81a03fd3cfd8863bcad3a4f012b0857c`
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&APPID=81a03fd3cfd8863bcad3a4f012b0857c`
      );
      if (!response.ok) {
        const res: WeatherError = await response.json();
        throw new Error(res.message);
      }

      const res: WeatherData = await response.json();
      dispatch({
        type: GET_WEATHER,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
