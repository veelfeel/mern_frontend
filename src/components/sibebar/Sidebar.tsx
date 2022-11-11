import React from 'react';
import { InverterFilter } from './InverterFilter';
import { PriceFilter } from './PriceFilter';
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
        <PriceFilter />
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
