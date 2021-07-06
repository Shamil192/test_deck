import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers/rootReducer";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";


const App: React.FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);


  return (
    <div className="App">
      <Search title="" />
      <Weather data={weatherData} />
    </div>
  );
};

export default App;
