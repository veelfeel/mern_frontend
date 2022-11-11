import React from 'react';

export const PriceFilter = () => {
  const [minValueInput, setMinValueInput] = React.useState<string>('0');
  const [maxValueInput, setMaxValueInput] = React.useState<string>('100');

  const [minValueRange, setMinValueRange] = React.useState<string>('0');
  const [maxValueRange, setMaxValueRange] = React.useState<string>('100');

  const styles = {
    left: `${minValueRange}%`,
    right: `${100 - Number(maxValueRange)}%`,
  };

  const changePriceMin = () => {
    const value = Number(minValueInput);
    const newMinVal = Math.min(value, 100);
    setMinValueInput(String(newMinVal));
    setMinValueRange(String(newMinVal));

    const newMaxVal = Math.max(newMinVal, Number(maxValueInput));
    setMaxValueInput(String(newMaxVal));
    setMaxValueRange(String(newMaxVal));
  };

  const changePriceMax = () => {
    const value = Number(maxValueInput);
    const newMinVal = Math.min(value, 100);
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
        <div className="price-content">
          <div className="price-input-group">
            <span> от </span>
            <input
              value={minValueInput}
              onChange={onChangeMinInput}
              onBlur={onBlurMin}
              onKeyDown={onKeyDownMin}
              min="0"
              max="100"
              placeholder="0"
              type="number"
            />
            <span className="price-reset none"> </span>
          </div>
          <span className="price-input__span">-</span>
          <div className="price-input-group">
            <span> до </span>
            <input
              value={maxValueInput}
              onChange={onChangeMaxInput}
              onBlur={onBlurMax}
              onKeyDown={onKeyDownMax}
              min="0"
              max="100"
              placeholder="100"
              type="number"
            />
            <span className="price-reset none"> </span>
          </div>
        </div>
        <div className="slider">
          <div className="progress" style={styles}></div>
          <input value={minValueRange} onChange={onChangeMinRange} min="0" max="100" type="range" />
          <input value={maxValueRange} onChange={onChangeMaxRange} min="0" max="100" type="range" />
        </div>
      </div>
    </div>
  );
};
