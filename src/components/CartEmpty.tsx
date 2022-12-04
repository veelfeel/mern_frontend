import React from 'react';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart-screen__empty">
      <h2 className="cart-screen__empty-text">Корзина пустая 😕</h2>
      <p>
        Вероятнее всего, вы ещё ничего не добавили в корзину.
        <br />
        Для того, чтобы добавить товар, перейдите на главную страницу.
      </p>
      <Link to="/" className="go-to-back">
        <span>Перейти к покупкам</span>
      </Link>
    </div>
  );
};
