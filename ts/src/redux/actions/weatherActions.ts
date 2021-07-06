import { ThunkAction } from "redux-thunk";
import { GET_WEATHER, WeatherAction, WeatherData } from "../types";
import { RootState } from "../reducers/rootReducer";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&APPID=81a03fd3cfd8863bcad3a4f012b0857c`
    );

    const res: WeatherData = await response.json();
    if (res.name) {
      dispatch({
        type: GET_WEATHER,
        payload: res,
      });
    } else {
      alert("Такого города нет, сори");
    }
  };
};
