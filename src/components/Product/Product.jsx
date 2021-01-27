import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import { Button } from '../Button/Button';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { toggleFavorite, isFavorite } from "../utils/favorite";
import { EMPTY_HEART, FULL_HEART } from '../utils/ico';

export const Product = ({ product, onAddToCart, favoriteListCallback }) => {

  const [colorSvg, setColorSvg] = useState(() => isFavorite(product.id) ? FULL_HEART : EMPTY_HEART);

  const handleFavorite = (productId) => {
    toggleFavorite(productId);
    isFavorite(productId) ? setColorSvg(FULL_HEART) : setColorSvg(EMPTY_HEART);

    if (typeof favoriteListCallback == 'function') {
      favoriteListCallback()
    }
  }

  return (
    <div
      className="Product"
    >
      <div
        className="row justify-cont-between"
      >
        <img
          className="Product__Img"
          src={product.url}
          alt={product.name}
        />

        <FavoriteButton
          onClick={() => handleFavorite(product.id)}
          d={colorSvg}
        />

      </div>
      <p
        className="Product__Name">
        {product.name}
      </p>
      <p
        className="Product__id">
        Код: {product.id}
      </p>

      <p>
        <span className="Product__Color">
          Цвет:
          </span>
        {product.color}
      </p>

      <div className="row justify-content-between align-items-center mt-15">
        <span className="Product__Price">
          {product.price}
          <span className="Product__Сurrency">
            грн
            </span>
        </span>

        <Button
          onClick={onAddToCart}
          className="btn"
          text="Add to cart"
          style={{ backgroundColor: "#0061c2" }}
        />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
  favoriteListCallback: PropTypes.func
}