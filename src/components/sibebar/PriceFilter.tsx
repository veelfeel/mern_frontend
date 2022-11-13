import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { setMaxPriceFilter, setMinPriceFilter } from '../../redux/filters/slice';
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

  const dispatch = useAppDispatch();

  // input
  const changePriceMin = () => {
    const newMinVal = Math.min(Number(removeSpaces(minValueInput)), maxPrice);
    const newMaxVal = Math.max(newMinVal, Number(removeSpaces(maxValueInput)));

    setMinValueInput(addSpaces(String(newMinVal)));
    setMinValueRange(String(newMinVal));
    dispatch(setMinPriceFilter(String(newMinVal)));

    if (Number(removeSpaces(minValueInput)) > Number(removeSpaces(maxValueInput))) {
      setMaxValueInput(addSpaces(String(newMaxVal)));
      setMaxValueRange(String(newMaxVal));
      dispatch(setMaxPriceFilter(String(newMaxVal)));
    }
  };

  const changePriceMax = () => {
    const newMinVal = Math.min(Number(removeSpaces(maxValueInput)), maxPrice);
    const newMaxVal = Math.max(newMinVal, Number(removeSpaces(minValueInput)));

    setMaxValueInput(addSpaces(String(newMaxVal)));
    setMaxValueRange(String(newMaxVal));
    dispatch(setMaxPriceFilter(String(newMaxVal)));
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

  // range
  const onMouseUpMinRange = () => {
    dispatch(setMinPriceFilter(removeSpaces(minValueInput)));
  };

  const onMouseUpMaxRange = () => {
    dispatch(setMaxPriceFilter(removeSpaces(maxValueInput)));
  };

  const onChangeMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = Math.min(Number(event.target.value), Number(maxValueRange));
    setMinValueRange(String(newMinVal));
    setMinValueInput(addSpaces(String(newMinVal)));
  };

  const onChangeMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxVal = Math.max(Number(event.target.value), Number(minValueRange));
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
            onMouseUp={onMouseUpMinRange}
            min={minPrice}
            max={maxPrice}
            step={100}
            type="range"
          />
          <input
            value={maxValueRange}
            onChange={onChangeMaxRange}
            onMouseUp={onMouseUpMaxRange}
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
