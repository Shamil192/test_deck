import {
  CURRENT_WEATHER,
  ADD_CITY,
  DEL_CITY,
  WEEKLY_WEATHER,
} from "../types/weatherTypes";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
      };
    case ADD_CITY:
      return { ...state, citys: [...state.citys, action.payload] };
    case DEL_CITY:
      return {
        ...state,
        citys: [...state.citys.filter((el, ind) => ind !== action.payload)],
      };
    case WEEKLY_WEATHER:
      return {
        ...state,
        weeklyWeather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
