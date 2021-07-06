import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ru";

function WeekWeatherModal({ show, setShow }) {
  const handleClose = () => setShow(false);
  const list = useSelector((state) => state.weeklyWeather.daily);
  moment.locale("ru");

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Прогноз на неделю</Modal.Title>
        </Modal.Header>
        {list?.map((el, i) => (
          <Modal.Body>
            <h6>{moment(el.dt * 1000).format("dd, Do MMMM YYYY")}</h6>
            <p>
              Темпрература {el.temp.min.toFixed(0)} - {el.temp.max.toFixed(0)}℃
            </p>
          </Modal.Body>
        ))}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WeekWeatherModal;
