import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  brandFilter: [],
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setBrandFilterChecked(state, action: PayloadAction<string>) {
      state.brandFilter = [...state.brandFilter, action.payload];
      // console.log(state.brandFilter);
    },
    setBrandFilterUnchecked(state, action: PayloadAction<string>) {
      state.brandFilter = state.brandFilter.filter((str) => str !== action.payload);
      // console.log(state.brandFilter);
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearchValue, setBrandFilterChecked, setBrandFilterUnchecked, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
