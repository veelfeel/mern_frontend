import React from 'react';

export const Thanks: React.FC = () => {
  return (
    <div className="thanks">
      Спасибо. Мы уже получили ваш заказ и скоро перезвоним вам.
      <button className="thanks__button-close">
        <span className="thanks__button-close-bar"></span>
        <span className="thanks__button-close-bar"></span>
      </button>
    </div>
  );
};
