import React from 'react'
import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css' ;

export function ImageGalleryItem({image, onClick}) {
  return (
    <li className={css.ImageGalleryItem} id={image.id}  onClick={onClick}>
  <img className={css.ImageGalleryItem-image}
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
  