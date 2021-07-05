import React from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="modal-card">
      <header>
        <p>{message}</p>
      </header>
      <button className="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};

export default Alert
