import React from 'react';

export const TimerOfPromo: React.FC = () => {
  return (
    <div className="promo__right">
      <div className="promo__right-top">
        <div className="promo__right-text">Товар дня:</div>
        <div className="promo__right-timer">
          <div className="promo__right-wrapper">
            <div className="promo-time promo__right-hour"></div>
          </div>
          <div className="promo__right-separate">:</div>
          <div className="promo__right-wrapper">
            <div className="promo-time promo__right-minute"></div>
          </div>
          <div className="promo__right-separate">:</div>
          <div className="promo__right-wrapper">
            <div className="promo-time promo__right-second"></div>
          </div>
        </div>
      </div>
      <div className="promo__right-center">
        <div className="promo__right-center-left-group">
          <div className="promo__right-center-discount">Скидка -21%</div>
          <img
            src="images/img-promo-right.png"
            alt="сплит-система"
            className="promo__right-center-img"
          />
        </div>
        <div className="promo__right-center-text-group">
          <div className="promo__right-center-price">
            <span className="promo__right-center-price-normal"> 19 000 ₽ </span>
            <span className="promo__right-center-price-through"> 24 200 ₽ </span>
          </div>
          <div className="promo__right-center-text">Сплит-система Rovex RS-07TSE1</div>
        </div>
      </div>
      <div className="promo__right-bottom">
        <button className="promo__right-bottom-button">В корзину</button>
      </div>
    </div>
  );
};
