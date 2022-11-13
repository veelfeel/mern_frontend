import React from 'react';
import { setAreaFilterChecked, setAreaFilterUnchecked } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store';

const areas = [
  '15 м² - 20 м²',
  '25 м² - 30 м²',
  '30 м² - 40 м²',
  '40 м² - 50 м²',
  '60 м² - 70 м²',
  '70 м² - 80 м²',
  '100 м²',
];

export const AreaFilter = () => {
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(setAreaFilterChecked(event.target.value));
    } else {
      dispatch(setAreaFilterUnchecked(event.target.value));
    }
  };

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Площадь помещения</h3>
      </div>
      <div className="sidebar__item-menu">
        {areas.map((area) => (
          <div key={area} className="sidebar__category">
            <label className="sidebar__category-label">
              <input
                type="checkbox"
                className="sidebar__category-checkbox"
                value={area}
                onChange={onChange}
              />
              {area}
              <span className="sidebar__category-quantity"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
