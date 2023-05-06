import React from 'react'
import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css' ;

export function ImageGalleryItem({image, onclick}) {
  return (
    <li className={css.ImageGalleryItem} id={image.id}  onClick={onclick}>
  <img className={css.ImageGalleryItemImage}
  src={image.webformatURL}
  alt={image.tags}
  name={image.largeImageURL}/>
</li>
  )
}
ImageGalleryItem.propTypes = {
    image: propTypes.object.isRequired,
    onclick: propTypes.func.isRequired,
  };
  