import React from 'react';

export const PanelOfSort: React.FC = () => {
  return (
    <div className="category-head">
      <div className="category-sort__group">
        <span className="category-sort__text">Сортировка:</span>
        <div className="select-group">
          <div className="select-parent" id="select">
            <div className="select-child-main"></div>
            <button className="select__item-btn">
              <span className="select__item-btn-bar"></span>
              <span className="select__item-btn-bar"></span>
            </button>
          </div>
          <div className="select-parent-menu">
            <div defaultValue="" className="select-child">
              По умолчанию
            </div>
            <div defaultValue="Default" className="select-child">
              Сначала популярные
            </div>
            <div defaultValue="LowToHigh" className="select-child">
              Сначала недорогие
            </div>
            <div defaultValue="HighToLow" className="select-child">
              Сначала дорогие
            </div>
          </div>
        </div>
      </div>
      <div className="category__filter">
        <img className="category__filter-icon" src="images/icons/filter.svg" alt="filter" />
        <div className="category__filter-text">Фильтры</div>
      </div>
      <div className="category__view-buttons">
        <button data-view="grid" className="category__button-grid">
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
          <div className="category__button-item-grid"></div>
        </button>
        <button data-view="list" className="category__button-list">
          <div className="category__button-item-list"></div>
          <div className="category__button-item-list"></div>
        </button>
      </div>
    </div>
  );
};
