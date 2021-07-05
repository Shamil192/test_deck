import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/actions/alertActions";
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

    if (city.trim() === "") {
      dispatch(setAlert("City is required"));
    }

    dispatch(getWeather(city));
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
