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
          <h1 className="title has-text-centered">{data.name}</h1>
          <div className="level" style={{ alignItems: "flex-start" }}>
            <div>
              <p className="heading">
                {" "}
                На улице {data?.weather[0].description}
              </p>
            </div>
            <div>
              <p className="heading">Температура: {data?.main.temp} ℃</p>
            </div>
            <div>
              <p>Влажность: {data?.main.humidity} %</p>
            </div>
            <div>
              <p>Давление: {data?.main.pressure} мм.рт.ст</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
