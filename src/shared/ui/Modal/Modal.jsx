import React from 'react';
import s from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={e => e.stopPropagation()}>
        {title && <h2 className={s.title}>{title}</h2>}
        <div className={s.content}>
          {children}
        </div>
      </div>
    </div>
  );
}; 