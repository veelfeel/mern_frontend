import React from 'react';

import { useAppSelector } from '../redux/store';
import { selectCart } from '../redux/cart/selectors';

import { endingWord } from '../utils/endingWord';

export const CartTotalDetails: React.FC = () => {
  const { items } = useAppSelector(selectCart);

  const qtyCartItems = items.reduce((a, b) => a + b.count, 0);
  const TotalPriceCartItems = items.reduce((a, b) => a + b.price * b.count, 0);

  return (
    <div className="cart-screen__total">
      <h3>Детали заказа</h3>
      <div className="cart-screen__products-quantity">
        {qtyCartItems} товар{endingWord(qtyCartItems)}
      </div>
      <div className="cart-screen__total-group">
        <div className="cart-screen__total-delivery">
          <span>Доставка</span>
          <span>0 ₽</span>
        </div>
        <button className="cart-screen__clear-cart-button">Очистить корзину</button>
      </div>
      <div className="cart-screen__total-bottom-group">
        <span>Итого к оплате</span>
        <div className="cart-screen__total-price-group">
          <div className="cart-screen__total-price">{TotalPriceCartItems.toLocaleString()}</div>
          <div className="rouble">₽</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button-primary button-secondary button-primary--go-to-order">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
