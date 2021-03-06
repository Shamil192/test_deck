import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/actions/citysActions";
import { getWeather } from "../redux/actions/weatherActions";

interface WeatherProps {
  title: string;
}

export const Search: React.FC<WeatherProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeather(city));
    dispatch(addCity(city));
    setCity("");
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Введите название города"
              value={city}
              onChange={changeHandler}
            />
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
};
