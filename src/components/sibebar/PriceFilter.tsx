import React from 'react';
// import { InputMask } from './InputMask';

export const PriceFilter = () => {
  const minPrice = 0;
  const maxPrice = 120000;

  const [minValueInput, setMinValueInput] = React.useState<string>('15000');
  const [maxValueInput, setMaxValueInput] = React.useState<string>('60000');

  const [minValueRange, setMinValueRange] = React.useState<string>('15000');
  const [maxValueRange, setMaxValueRange] = React.useState<string>('60000');

  const styles = {
    left: `${(Number(minValueRange) / maxPrice) * 100}%`,
    right: `${100 - (Number(maxValueRange) / maxPrice) * 100}%`,
  };

  const changePriceMin = () => {
    const value = Number(minValueInput);
    const newMinVal = Math.min(value, maxPrice);
    setMinValueInput(String(newMinVal));
    setMinValueRange(String(newMinVal));

    const newMaxVal = Math.max(newMinVal, Number(maxValueInput));
    setMaxValueInput(String(newMaxVal));
    setMaxValueRange(String(newMaxVal));
  };

  const changePriceMax = () => {
    const value = Number(maxValueInput);
    const newMinVal = Math.min(value, maxPrice);
    setMaxValueInput(String(newMinVal));
    setMaxValueRange(String(newMinVal));

    const newMaxVal = Math.max(newMinVal, Number(minValueInput));
    setMaxValueInput(String(newMaxVal));
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
    setMinValueInput(String(event.target.value));
  };

  const onChangeMaxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValueInput(String(event.target.value));
  };

  const onChangeMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const newMinVal = Math.min(value, Number(maxValueRange));
    setMinValueRange(String(newMinVal));
    setMinValueInput(String(newMinVal));
  };

  const onChangeMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const newMaxVal = Math.max(value, Number(minValueRange));
    setMaxValueRange(String(newMaxVal));
    setMaxValueInput(String(newMaxVal));
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
        {/* <InputMask /> */}
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
              placeholder={String(minPrice)}
              type="number"
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
              placeholder={String(maxPrice)}
              type="number"
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
