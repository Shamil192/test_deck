import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import AddCityModal from "../modals/AddCityModal";
import {
  deleteCity,
  fetchCurrentWeater,
  fetchWeek,
} from "../../redux/actions/weatherAC";
import WeekWeatherModal from "../modals/WeekWeatherModal";
import moment from "moment";
import "moment/locale/ru";

function Main() {
  const citysArray = useSelector((state) => state.citys);
  const currentCityWeather = useSelector((state) => state.currentWeather);
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(0);
  const dispatch = useDispatch();
  moment.locale("ru");

  setTimeout(() => {
    setTime(time + 1);
  }, 300000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position?.coords?.latitude;
      let lon = position?.coords?.longitude;
      dispatch(fetchCurrentWeater(lat, lon));
    });
  }, [dispatch, time]);

  const delCity = (ind) => {
    dispatch(deleteCity(ind));
  };

  const showWeek = (lat, lon) => {
    setShow(true);
    dispatch(fetchWeek(lat, lon));
  };

  return (
    <>
      <WeekWeatherModal show={show} setShow={setShow} />
      <AddCityModal />
      <div className="container my-5">
        <Card>
          <Card.Header>Мое местоположение</Card.Header>
          <Card.Body>
            <Card.Title>{currentCityWeather?.name}</Card.Title>
            <h3>{currentCityWeather?.main.temp.toFixed(0)}℃</h3>
            <h4>
              {" "}
              Ощущается как {currentCityWeather?.main.feels_like.toFixed()}℃
            </h4>
            Влажность {currentCityWeather?.main.humidity.toFixed()}%, давление{" "}
            {currentCityWeather?.main.pressure.toFixed()}мм рт.ст
          </Card.Body>
          <div>
            <Button
              className="mb-2"
              variant="primary"
              onClick={() =>
                showWeek(
                  currentCityWeather.coord.lat,
                  currentCityWeather.coord.lon
                )
              }
            >
              Подробнее
            </Button>
          </div>
        </Card>
        {citysArray.map((el, ind) => (
          <Card id={el.sys?.id}>
            <Card.Header>
              <h2>{el.name}</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h3>Температура в городе {el.name}:</h3>
                <h3>{el.main?.temp.toFixed(0)}℃</h3>
              </Card.Title>
              <Card.Text>
                <h4> Ощущается как {el.main?.feels_like.toFixed()}℃</h4>
              </Card.Text>
              <Card.Text>
                Влажность {el.main?.humidity.toFixed()}%, давление{" "}
                {el.main?.pressure.toFixed()}мм рт.ст
              </Card.Text>
              <Button
                className="mx-1"
                variant="warning"
                onClick={() => showWeek(el.coord.lat, el.coord.lon)}
              >
                Подробнее
              </Button>
              <Button
                variant="danger"
                id={el.sys?.id}
                onClick={() => delCity(ind)}
              >
                Удалить
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Main;
