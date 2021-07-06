import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import citysReducer from "./citysReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  citys: citysReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
