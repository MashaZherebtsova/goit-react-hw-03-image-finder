import React from 'react'
import propTypes from 'prop-types';
import css from './button.module.css'

export function Button({onClick}) {
  return (
    <div className={css.Btn}>
   <button className={css.Button} type='button' onClick={onClick}>
    Load more
   </button>
   </div>
  )
}
Button.propTypes = {
    onClick: propTypes.func.isRequired,
  };