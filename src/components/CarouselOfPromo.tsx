import React from 'react';

export const CarouselOfPromo: React.FC = () => {
  return (
    <div className="carousel">
      <div className="carousel__item carousel__item--visible">
        <img className="carousel__item-img" src="https://via.placeholder.com/368.33x205/d6dcff" />
      </div>
      <div className="carousel__item">
        <img className="carousel__item-img" src="https://via.placeholder.com/368.33x205/ffeed9" />
      </div>
      <div className="carousel__item">
        <img className="carousel__item-img" src="https://via.placeholder.com/368.33x205/efffce" />
      </div>
      <div className="carousel__actions">
        <button className="carousel__button--prev" aria-label="Previous slide">
          <div className="carousel__button-bar"></div>
          <div className="carousel__button-bar"></div>
        </button>
        <button className="carousel__button--next" aria-label="Next slide">
          <div className="carousel__button-bar"></div>
          <div className="carousel__button-bar"></div>
        </button>
      </div>
      <div className="carousel__pagination">
        <button className="carousel__button-pagination">
          <span className="carousel__button-span carousel__button-span--active"></span>
        </button>
        <button className="carousel__button-pagination">
          <span className="carousel__button-span"></span>
        </button>
        <button className="carousel__button-pagination">
          <span className="carousel__button-span"></span>
        </button>
      </div>
    </div>
  );
};
