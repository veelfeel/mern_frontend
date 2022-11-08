import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/filters/slice';

import debounce from 'lodash.debounce';

export const Search: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ placeholder }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="input-search">
      <input value={value} onChange={onChangeInput} placeholder={placeholder} />
      <svg
        className="svg-search"
        width="20"
        height="20"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
    </div>
  );
};
