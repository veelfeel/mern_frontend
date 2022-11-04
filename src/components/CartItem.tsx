import React from 'react';
import { addCartItem, minusCartItem, removeCartItem } from '../redux/cart/slice';
import { CartItem as CartItemType } from '../redux/cart/types';
import { useAppDispatch } from '../redux/store';

type CartItemProps = {
  _id: string;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({ _id, name, price, count, imageUrl }) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(
      addCartItem({
        _id,
      } as CartItemType),
    );
  };

  const onClickMinus = () => {
    dispatch(minusCartItem(_id));
  };

  const onClickRemove = () => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      dispatch(removeCartItem(_id));
    }
  };

  return (
    <div className="cart-item">
      <img className="cart-item__img" src={imageUrl} alt={name} />
      <a href="">
        <div className="cart-item__title">{name}</div>
      </a>
      <div className="cart-item__price">{price.toLocaleString()} ₽</div>
      <div className="product-counter">
        <button disabled={count === 1} className="product-counter__button" onClick={onClickMinus}>
          -
        </button>
        <div className="product-counter__quantity">{count}</div>
        <button className="product-counter__button" onClick={onClickPlus}>
          +
        </button>
      </div>
      <button onClick={onClickRemove} className="cart-item__button-delete text-primary">
        Удалить
      </button>
    </div>
  );
};
