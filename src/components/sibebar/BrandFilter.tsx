import React from 'react';
import { setBrandFilterChecked, setBrandFilterUnchecked } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';

export const BrandFilter: React.FC = () => {
  const [brands, setBrands] = React.useState<string[]>([
    'Rovex',
    'JAX',
    'Ballu',
    'Electrolux',
    'Zanussi',
    'Toshiba',
    'Shuft',
    'Denko',
    'Centek',
    'Lessar',
  ]);

  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(setBrandFilterChecked(event.target.value));
    } else {
      dispatch(setBrandFilterUnchecked(event.target.value));
    }
  };

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Бренд</h3>
      </div>
      <div className="sidebar__item-menu">
        {brands.map((brand) => (
          <div key={brand} className="sidebar__category">
            <label className="sidebar__category-label">
              <input
                type="checkbox"
                className="sidebar__category-checkbox"
                value={brand}
                onChange={onChange}
              />
              {brand}
              <span className="sidebar__category-quantity"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
