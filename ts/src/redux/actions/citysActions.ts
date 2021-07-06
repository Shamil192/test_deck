import { ThunkAction } from "redux-thunk";
import { ADD_CITY, CitysAction } from "../types";
import { RootState } from "../reducers/rootReducer";

export const addCity = (
  city: string
): ThunkAction<void, RootState, null, CitysAction> => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&APPID=81a03fd3cfd8863bcad3a4f012b0857c`
    );

    const res = await response.json();
    if (res.name) {
      dispatch({
        type: ADD_CITY,
        payload: res,
      });
    }
  };
};
