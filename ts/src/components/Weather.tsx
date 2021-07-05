import React from "react";
import { WeatherData } from "../redux/types";

interface WeatherProps {
  data: WeatherData | null;
}
export const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <section className="section">
      {data && (
        <div className="container">
          <h1 className="title has-text-centered">{data?.name}</h1>
          <div className="level" style={{ alignItems: "flex-start" }}>
            <div>
              <p className="heading"> {data?.weather[0].description}</p>
            </div>
            <div>
              <p className="heading">Температура</p>
              <div className="title">
                <p className="mb2"> {data?.main.temp}</p>
              </div>
            </div>
            <div>
              <p>Влажность</p>
              <p>{data?.main.humidity}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
