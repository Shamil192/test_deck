import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import FormControl from "react-bootstrap/FormControl";
import { fetchAddCity } from "../../redux/actions/weatherAC";

function AddCityModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const openModal = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(false);

  const handleOk = () => {
    dispatch(fetchAddCity(value));
    setShow(false);
    setValue("");
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Button className="mt-5" variant="success" onClick={openModal}>
        Добавить город
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Введите название города</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormControl
            type="text"
            value={value}
            onChange={changeHandler}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleOk}>
            Выбрать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCityModal;
