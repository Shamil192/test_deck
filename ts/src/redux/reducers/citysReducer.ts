/* eslint-disable import/no-anonymous-default-export */
import { ADD_CITY, CitysAction } from "../types";

const initialState = {
  citys: [],
};

export default (state = initialState, action: CitysAction) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        citys: [ ...state.citys, action.payload],
      };
    default:
      return state;
  }
};
