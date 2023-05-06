import propTypes from 'prop-types';

import React from 'react'
import css from './Modal.module.css'

export function Modal({ src, alt, handleClose }) {
  return (
    
     <div className={css.Overlay} onClick={handleClose}>
    <div className={css.Modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);
}
Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};