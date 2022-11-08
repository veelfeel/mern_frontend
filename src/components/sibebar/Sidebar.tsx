import React from 'react';
import { BrandFilter } from './BrandFilter';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-text">Фильтры</div>
        <button className="sidebar__button-close">
          <span className="sidebar__button-close-bar"></span>
          <span className="sidebar__button-close-bar"></span>
        </button>
      </div>

      <div>
        <div className="sidebar__item">
          <div className="sidebar__item-title">
            <button className="sidebar__title-btn">
              <span className="sidebar__title-btn-bar"></span>
              <span className="sidebar__title-btn-bar"></span>
            </button>
            <h3 className="sidebar__title-category">Тип кондиционера</h3>
          </div>
          <div className="sidebar__item-menu">
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="standart"
                />
                Стандартные
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>

            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="invertor"
                />
                Инверторные
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="sidebar__item">
          <div className="sidebar__item-title">
            <button className="sidebar__title-btn">
              <span className="sidebar__title-btn-bar"></span>
              <span className="sidebar__title-btn-bar"></span>
            </button>
            <h3 className="sidebar__title-category">Цена</h3>
          </div>
          <div className="sidebar__item-menu padding">
            <div className="price-group">
              <div className="price-input">
                <span className="price-input__text"> от </span>
                <input
                  className="input-text"
                  type="text"
                  min="14000"
                  max="300000"
                  id="price-min"
                  placeholder="14 000"
                />
                <span className="price-reset none"> </span>
              </div>
              <span className="price-input__span">-</span>
              <div className="price-input">
                <span className="price-input__text"> до </span>
                <input
                  className="input-text"
                  type="text"
                  min="14000"
                  max="300000"
                  id="price-max"
                  placeholder="300 000"
                />
                <span className="price-reset none"> </span>
              </div>
            </div>
            <div className="slider">
              <div className="progress"></div>
            </div>
            <div className="multi-range">
              <input id="min" type="range" min="14000" max="300000" defaultValue="14000" step="1" />
              <input
                id="max"
                type="range"
                min="14000"
                max="300000"
                defaultValue="300000"
                step="1"
              />
            </div>
          </div>
        </div>

        <div className="sidebar__item">
          <div className="sidebar__item-title">
            <button className="sidebar__title-btn">
              <span className="sidebar__title-btn-bar"></span>
              <span className="sidebar__title-btn-bar"></span>
            </button>
            <h3 className="sidebar__title-category">Площадь помещения</h3>
          </div>
          <div className="sidebar__item-menu">
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="15м²-20м²"
                />
                15 м² - 20 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="25м²-30м²"
                />
                25 м² - 30 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="30м²-40м²"
                />
                30 м² - 40 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="40м²-50м²"
                />
                40 м² - 50 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="60м²-70м²"
                />
                60 м² - 70 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="70м²-80м²"
                />
                70 м² - 80 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
            <div className="sidebar__category">
              <label className="sidebar__category-label">
                <input
                  type="checkbox"
                  className="sidebar__category-checkbox"
                  defaultValue="100м²"
                />
                100 м²
                <span className="sidebar__category-quantity"></span>
              </label>
            </div>
          </div>
        </div>
        <BrandFilter />
        <div className="sidebar__item">
          <div className="sidebar__item-title">
            <button className="sidebar__title-btn">
              <span className="sidebar__title-btn-bar"></span>
              <span className="sidebar__title-btn-bar"></span>
            </button>
            <h3 className="sidebar__title-category">Страна-производитель</h3>
          </div>
          <div className="sidebar__item-menu">
            <label className="country-child">
              <input
                className="country-child__input"
                type="radio"
                name="countries"
                defaultValue=""
                defaultChecked
              />
              <span className="design"></span>
              <p>Все страны</p>
            </label>
            <label className="country-child">
              <input
                className="country-child__input"
                type="radio"
                name="countries"
                defaultValue="turkey"
              />
              <span className="design"></span>
              <p>Турция</p>
            </label>
            <label className="country-child">
              <input
                className="country-child__input"
                type="radio"
                name="countries"
                defaultValue="china"
              />
              <span className="design"></span>
              <p>Китай</p>
            </label>
            <label className="country-child">
              <input
                className="country-child__input"
                type="radio"
                name="countries"
                defaultValue="france"
              />
              <span className="design"></span>
              <p>Франция</p>
            </label>
            <label className="country-child">
              <input
                className="country-child__input"
                type="radio"
                name="countries"
                defaultValue="italy"
              />
              <span className="design"></span>
              <p>Италия</p>
            </label>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <button className="sidebar__button-apply">
          Показать <span className="sidebar__button-apply-span"></span>
        </button>
      </div>
    </aside>
  );
};
