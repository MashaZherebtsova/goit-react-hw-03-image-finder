import React from 'react'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import propTypes from 'prop-types';
import css from './ImageGallery.module.css'

export function ImageGallery({images,onImageClick}) {
  return (
    <div className={css.ImageGalleryContainer}>
    <ul className={css.ImageGallery}>
    {images.map ((image, index)=> (
        <ImageGalleryItem onclick={onImageClick} image={image} key={index} />

    ))}
  </ul>
  </div>
  )
}
ImageGallery.propTypes = {
    images: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
      })
    ),
    onImageClick: propTypes.func.isRequired,
  };