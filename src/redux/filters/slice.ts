import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearchValue, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
