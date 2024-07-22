import React from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, sizeHeight, sizeWidth, like, date, description, sendInfo, onDescriptionChange }) => {
  return (
    <form onSubmit={sendInfo}>
      <dialog className="modal-dialog" open={isOpen}>
        <div className="modal-content">
          <span className="material-symbols-outlined modal-close" onClick={onClose}>
            <span>X</span>
          </span>
          <div className="modal-icons">
            <p className='modal-icon'><span className="material-symbols-outlined">Favorite: </span> {like}</p>
            <p className='modal-icon'><span className="material-symbols-outlined">Height: </span> {sizeHeight}</p>
            <p className='modal-icon'><span className="material-symbols-outlined">Width: </span> {sizeWidth}</p>
            <p className='modal-icon'><span className="material-symbols-outlined">Date added: </span> {date}</p>
            <input 
              className="modal-input" 
              type="text" 
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
            />
            <button className='modal-button'>save</button>
          </div>
        </div>
      </dialog>
    </form>
  );
};

export default Modal;
