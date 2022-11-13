import React from 'react';
import { setCountryFilter } from '../../redux/filters/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const countries = ['Все страны', 'Турция', 'Китай', 'Франция', 'Италия'];

export const CountryFilter = () => {
  const dispatch = useAppDispatch();
  const valueCountry = useAppSelector((state) => state.filters.countryFilter);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCountryFilter(event.target.value));
  };

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Страна-производитель</h3>
      </div>
      <div className="sidebar__item-menu">
        {countries.map((country) => (
          <label key={country} className="country-child">
            <input
              className="country-child__input"
              type="radio"
              name="countries"
              value={country}
              checked={country === valueCountry ? true : false}
              onChange={onChange}
            />
            <span className="design"></span>
            <p>{country}</p>
          </label>
        ))}
      </div>
    </div>
  );
};
