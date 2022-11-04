import React from 'react';
import { Link } from 'react-router-dom';

import { CardRating } from './CardRating';
import { AddFavouritesButton } from './AddFavouritesButton';
import { useAppDispatch } from '../redux/store';
import { CartItem } from '../redux/cart/types';
import { addCartItem } from '../redux/cart/slice';

export type ProductBlockProps = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  countInStock: number;
  modes: string;
  power: number;
  invertor: string;
  area: number;
  wifi: string;
  volume: number;
  warranty: string;
};

export const ProductBlock: React.FC<ProductBlockProps> = ({
  _id,
  name,
  imageUrl,
  price,
  countInStock,
  modes,
  power,
  invertor,
  area,
  wifi,
  volume,
  warranty,
}) => {
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      _id,
      name,
      price,
      count: 0,
      imageUrl,
    };
    dispatch(addCartItem(item));
  };

  return (
    <div className="product-block">
      <div className="product-block__inner-img">
        <img className="product-block__img" src={imageUrl} alt={name} />
      </div>
      <Link to={'/product/' + _id}>
        <h4 className="product-block__title text-primary">{name.replace('комплект', '')}</h4>
      </Link>
      <CardRating />
      <div className="product-block__info-details">
        <ul className="product-block__details">
          <li>
            <p>Режимы</p>
            <p>{modes}</p>
          </li>
          <li>
            <p>Мощность</p>
            <p>{power}</p>
          </li>
          <li>
            <p>Инвертор</p>
            <p>{invertor}</p>
          </li>
          <li>
            <p>Макс. площадь</p>
            <p>{area} м²</p>
          </li>
          <li>
            <p>Wi-Fi</p>
            <p>{wifi}</p>
          </li>
          <li>
            <p>Уровень шума</p>
            <p>{volume} дБ</p>
          </li>
          <li>
            <p>Гарантия АСЦ</p>
            <p>{warranty}</p>
          </li>
        </ul>
        <button className="product-block__details-button">
          <span>Развернуть характеристики</span>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="product-block__right-content">
        <div className="product-block__price">
          <span>{price.toLocaleString()}</span>
          <span>₽</span>
        </div>
        <AddFavouritesButton />
        <button onClick={onClickAdd} className="product-block-button button-primary">
          Купить
        </button>
        <span className="product-block__count-in-stock">В наличии: {countInStock} шт.</span>
        <span className="product-block__delivery"> Бесплатная доставка</span>
      </div>
    </div>
  );
};
