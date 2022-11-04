import React from 'react';

export const ContactOfPromo: React.FC = () => {
  return (
    <div className="promo__left">
      <p className="promo__left-title">
        Нужна помощь при выборе оборудования или не нашли нужный товар?
      </p>
      <p className="promo__left-title">
        Оставьте свои контактные данные, мы свяжемся с Вами и проконсультируем.
      </p>
      <div className="promo__left-form">
        <input
          type="text"
          className="promo__left-input"
          id="tel"
          placeholder="+7 (___) ___ __ __"
        />
        <button className="promo__left-btn">Связаться</button>
      </div>
    </div>
  );
};
