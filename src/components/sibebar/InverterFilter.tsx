import React from 'react';
import { setInverterFilterChecked, setInverterFilterUnchecked } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';

const inverter = ['есть', 'нет'];

export const InverterFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(setInverterFilterChecked(event.target.value));
    } else {
      dispatch(setInverterFilterUnchecked(event.target.value));
    }
  };

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Инверторная технология</h3>
      </div>
      <div className="sidebar__item-menu">
        {inverter.map((item) => (
          <div key={item} className="sidebar__category">
            <label className="sidebar__category-label">
              <input
                type="checkbox"
                className="sidebar__category-checkbox"
                value={item}
                onChange={onChange}
              />
              {item}
              <span className="sidebar__category-quantity"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
