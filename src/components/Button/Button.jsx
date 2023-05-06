import React from 'react'
import propTypes from 'prop-types';
import css from './button.module.css'

export function Button({onClick}) {
  return (
   <button className={css.Button} type='button' onClick={onClick}>
    Load more
   </button>
  )
}
Button.propTypes = {
    onClick: propTypes.func.isRequired,
  };