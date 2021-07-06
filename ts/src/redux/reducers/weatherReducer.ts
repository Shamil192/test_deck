/* eslint-disable import/no-anonymous-default-export */
import { WeatherState, WeatherAction, GET_WEATHER } from "../types";

const initialState: WeatherState = {
  data: null,
  error: "",
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
