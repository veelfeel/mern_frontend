import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { setMaxPriceFilter, setMinPriceFilter } from '../../redux/filters/slice';
import { addSpaces, removeSpaces } from '../../utils/normalizePrice';

export const PriceFilter = () => {
  const minPrice = '0';
  const maxPrice = '120000';

  const [minValueInput, setMinValueInput] = React.useState<string>(minPrice);
  const [maxValueInput, setMaxValueInput] = React.useState<string>(maxPrice);

  const [minValueRange, setMinValueRange] = React.useState<string>(minPrice);
  const [maxValueRange, setMaxValueRange] = React.useState<string>(maxPrice);

  const styles = {
    left: `${(Number(minValueRange) / Number(maxPrice)) * 100}%`,
    right: `${100 - (Number(maxValueRange) / Number(maxPrice)) * 100}%`,
  };

  const dispatch = useAppDispatch();

  // input
  const changePriceMin = () => {
    const newMinVal = Math.min(removeSpaces(minValueInput), Number(maxPrice));
    const newMaxVal = Math.max(newMinVal, removeSpaces(maxValueInput));

    setMinValueInput(addSpaces(newMinVal));
    setMinValueRange(String(newMinVal));

    dispatch(setMinPriceFilter(String(newMinVal)));

    if (removeSpaces(minValueInput) > removeSpaces(maxValueInput)) {
      setMaxValueInput(addSpaces(newMaxVal));
      setMaxValueRange(String(newMaxVal));

      dispatch(setMaxPriceFilter(String(newMaxVal)));
    }
  };

  const changePriceMax = () => {
    const newMinVal = Math.min(removeSpaces(maxValueInput), Number(maxPrice));
    const newMaxVal = Math.max(newMinVal, removeSpaces(minValueInput));

    setMaxValueInput(addSpaces(newMaxVal));
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
    dispatch(setMinPriceFilter(String(removeSpaces(minValueInput))));
  };

  const onMouseUpMaxRange = () => {
    dispatch(setMaxPriceFilter(String(removeSpaces(maxValueInput))));
  };

  const onChangeMinRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = Math.min(Number(event.target.value), Number(maxValueRange));
    setMinValueRange(String(newMinVal));
    setMinValueInput(addSpaces(newMinVal));
  };

  const onChangeMaxRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxVal = Math.max(Number(event.target.value), Number(minValueRange));
    setMaxValueRange(String(newMaxVal));
    setMaxValueInput(addSpaces(newMaxVal));
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
              placeholder={addSpaces(minPrice)}
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
              placeholder={addSpaces(maxPrice)}
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
