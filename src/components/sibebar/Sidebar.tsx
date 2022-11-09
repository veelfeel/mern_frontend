import React from 'react';
import { InverterFilter } from './InverterFilter';
import { AreaFilter } from './AreaFilter';
import { BrandFilter } from './BrandFilter';
import { CountryFilter } from './CountryFilter';

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
        <InverterFilter />
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
        <AreaFilter />
        <BrandFilter />
        <CountryFilter />
      </div>
      <div className="sidebar__bottom">
        <button className="sidebar__button-apply">
          Показать <span className="sidebar__button-apply-span"></span>
        </button>
      </div>
    </aside>
  );
};
