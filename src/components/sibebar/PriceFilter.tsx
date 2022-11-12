import React from 'react';
import { addSpaces, removeSpaces } from '../../utils/normalizePrice';

export const PriceFilter = () => {
  const minPrice = 0;
  const maxPrice = 120000;

  const [minValueInput, setMinValueInput] = React.useState<string>(addSpaces(String(minPrice)));
  const [maxValueInput, setMaxValueInput] = React.useState<string>(addSpaces(String(maxPrice)));

  const [minValueRange, setMinValueRange] = React.useState<string>(String(minPrice));
  const [maxValueRange, setMaxValueRange] = React.useState<string>(String(maxPrice));

  const styles = {
    left: `${(Number(minValueRange) / maxPrice) * 100}%`,
    right: `${100 - (Number(maxValueRange) / maxPrice) * 100}%`,
  };

  const changePriceMin = () => {
    const value = Number(removeSpaces(minValueInput));
    const newMinVal = Math.min(value, maxPrice);
    setMinValueInput(addSpaces(String(newMinVal)));
    setMinValueRange(String(newMinVal));

    const newMaxVal = Math.max(newMinVal, Number(removeSpaces(maxValueInput)));
    setMaxValueInput(addSpaces(String(newMaxVal)));
    setMaxValueRange(String(newMaxVal));
  };

  const changePriceMax = () => {
    const value = Number(removeSpaces(maxValueInput));
    const newMinVal = Math.min(value, maxPrice);
    setMaxValueInput(addSpaces(String(newMinVal)));
    setMaxValueRange(String(newMinVal));

    const newMaxVal = Math.max(newMinVal, Number(removeSpaces(minValueInput)));
    setMaxValueInput(addSpaces(String(newMaxVal)));
    setMaxValueRange(String(newMaxVal));
  };

  const onBlurMin = () => {
    changePriceMin();
  };

  const onBlurMax = () => {
    changePriceMax();
  };

  const onKeyDownMin = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      changePriceMin();
    }
  };

  const onKeyDownMax = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      changePriceMax();
    }
  };

  const onChangeMinInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinValueInput(addSpaces(event.target.value));
  };

  const onChangeMaxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValueInput(addSpaces(event.target.value));
  };

  const onChangeMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const newMinVal = Math.min(value, Number(maxValueRange));
    setMinValueRange(String(newMinVal));
    setMinValueInput(addSpaces(String(newMinVal)));
  };

  const onChangeMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const newMaxVal = Math.max(value, Number(minValueRange));
    setMaxValueRange(String(newMaxVal));
    setMaxValueInput(addSpaces(String(newMaxVal)));
  };

  return (
    <div className="sidebar__item">
      <div className="sidebar__item-title">
        <button className="sidebar__title-btn">
          <span className="sidebar__title-btn-bar"></span>
          <span className="sidebar__title-btn-bar"></span>
        </button>
        <h3 className="sidebar__title-category">Цена</h3>
      </div>
      <div className="sidebar__item-menu padding">
        <div className="price-content">
          <div className="price-input-group">
            {/* <span> от </span>
            <span>₽</span> */}
            <input
              value={minValueInput}
              onChange={onChangeMinInput}
              onBlur={onBlurMin}
              onKeyDown={onKeyDownMin}
              min={minPrice}
              max={maxPrice}
              placeholder={addSpaces(String(minPrice))}
            />
            <span className="price-reset none"> </span>
          </div>
          <span className="price-input__span">-</span>
          <div className="price-input-group">
            {/* <span> до </span>
            <span>₽</span> */}
            <input
              value={maxValueInput}
              onChange={onChangeMaxInput}
              onBlur={onBlurMax}
              onKeyDown={onKeyDownMax}
              min={minPrice}
              max={maxPrice}
              placeholder={addSpaces(String(maxPrice))}
            />
            <span className="price-reset none"> </span>
          </div>
        </div>
        <div className="slider">
          <div className="progress" style={styles}></div>
          <input
            value={minValueRange}
            onChange={onChangeMinRange}
            min={minPrice}
            max={maxPrice}
            step={100}
            type="range"
          />
          <input
            value={maxValueRange}
            onChange={onChangeMaxRange}
            min={minPrice}
            max={maxPrice}
            step={100}
            type="range"
          />
        </div>
      </div>
    </div>
  );
};
