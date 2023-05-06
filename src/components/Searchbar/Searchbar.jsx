import propTypes from 'prop-types';
import React from 'react'
import css from './Searchbar.module.css'

export function Searchbar({onSubmit}) {
  return (
    <header className={css.Searchbar}>
      
  <form className={css.SearchForm} onSubmit={onSubmit}>
    <button  type="submit"className={css.SearchFormBtn} >
    Search 
    </button>

    <input 
    name="inputForSearch"
    className={css.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      />
  </form>
</header>

  )
}
Searchbar.propTypes = {
    onSubmit: propTypes.func,
  };