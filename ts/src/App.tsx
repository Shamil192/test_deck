import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers/rootReducer";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import Alert from "./components/Alert";
import { setAlert } from "./redux/actions/alertActions";
import { setError } from "./redux/actions/weatherActions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);
  console.log(weatherData);

  return (
    <div className="App">
      <Search title="" />
      <Weather data={weatherData} />
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
