import React from "react";

function ConfirmDeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="overlay">
      <div className="confirm-box">
        <p className="confirm-message">Вы уверены, что хотите удалить задачу?</p>
        <button className="confirm-button" onClick={onConfirm}>
          Удалить
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
