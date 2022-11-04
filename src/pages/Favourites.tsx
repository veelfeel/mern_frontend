import React from 'react';
import { Link } from 'react-router-dom';

const Favourites: React.FC = () => {
  return (
    <div className="favourites-screen">
      <div className="container">
        <div className="favourites-screen__content">
          <Link to="/" className="go-to-back-link">
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
            <span>Вернуться назад</span>
          </Link>
          <div className="favourites-screen__title">Избранное</div>
          <div className="favourites-screen__products"></div>
          <div className="favourites-screen__empty">
            <img
              className="favourites-screen__empty-img"
              src="images/icons/favourites-none.svg"
              alt="favourites-none"
            />
            <div data-favourites-empty className="favourites-screen__empty-text">
              В списке избранного пока нет товаров
            </div>
          </div>
          <button className="favourites-screen__button-catalog">Перейти в каталог</button>
        </div>
        <div className="favourites-screen__bottom"></div>
      </div>
    </div>
  );
};

export default Favourites;
