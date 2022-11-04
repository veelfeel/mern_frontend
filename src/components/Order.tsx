import React from 'react';

export const Order: React.FC = () => {
  return (
    <div id="order-form" className="card-body border-top">
      <button className="order__button-close">
        <span className="order__button-close-bar"></span>
        <span className="order__button-close-bar"></span>
      </button>
      <div className="order__alert-text-number">Телефон должен содержать 11 цифр</div>
      <div className="order__alert-text-address">Заполните адрес доставки</div>
      <div className="order__alert-text-checkbox">Согласитесь с политикой конфиденциальности</div>
      <h5 className="cart-title cart-title--form">Оформление заказа</h5>
      <form action="#" className="order-modal__form order">
        <input type="hidden" name="form_subject" value="Покупка кондиционера" />
        <label className="order__label flex-between-end">
          <input
            type="tel"
            name="Телефон"
            className="order__input form-control"
            placeholder="+7 (___)___-__-__"
            id="tel"
          />
        </label>
        <label className="order__label flex-between-end">
          <input
            type="text"
            name="Адрес"
            className="order__input form-control"
            placeholder="Введите адрес доставки"
            id="address"
          />
        </label>
        <button className="order__btn btn-primary btn">Заказать</button>
        <div className="order__personal-group">
          <div className="order__item-check">
            <input type="checkbox" checked className="order__checkbox" />
          </div>
          <div className="order__personal-text">
            Я согласен с <span className="order__privacy-policy">политикой конфиденциальности</span>
            ,<span className="order__user-agreement">пользовательским соглашением</span> и даю
            разрешение на обработку персональных данных.
          </div>
        </div>
      </form>
      <h5 className="cart-title-bottom">
        Или позвоните нам сами
        <br />
        <span className="cart-title-bottom__phone">8 (988) 148-28-38</span>
      </h5>
    </div>
  );
};
