import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortEnum } from "./types";

const initialState: FilterSliceState = {
  searchValue: "",
  inverterFilter: [],
  minPriceFilter: "",
  maxPriceFilter: "",
  areaFilter: [],
  brandFilter: [],
  countryFilter: "Все страны",
  sort: {
    name: "По популярности",
    sortProperty: SortEnum.RATING_DESC,
  },
  page: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setInverterFilterChecked(state, action: PayloadAction<string>) {
      state.inverterFilter = [...state.inverterFilter, action.payload];
    },
    setInverterFilterUnchecked(state, action: PayloadAction<string>) {
      state.inverterFilter = state.inverterFilter.filter(
        (str) => str !== action.payload
      );
    },
    setMinPriceFilter(state, action: PayloadAction<string>) {
      state.minPriceFilter = action.payload;
    },
    setMaxPriceFilter(state, action: PayloadAction<string>) {
      state.maxPriceFilter = action.payload;
    },
    setAreaFilterChecked(state, action: PayloadAction<string>) {
      state.areaFilter = [...state.areaFilter, action.payload];
    },
    setAreaFilterUnchecked(state, action: PayloadAction<string>) {
      state.areaFilter = state.areaFilter.filter(
        (str) => str !== action.payload
      );
    },
    setBrandFilterChecked(state, action: PayloadAction<string>) {
      state.brandFilter = [...state.brandFilter, action.payload];
    },
    setBrandFilterUnchecked(state, action: PayloadAction<string>) {
      state.brandFilter = state.brandFilter.filter(
        (str) => str !== action.payload
      );
    },
    setCountryFilter(state, action: PayloadAction<string>) {
      state.countryFilter = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setInverterFilterChecked,
  setInverterFilterUnchecked,
  setMinPriceFilter,
  setMaxPriceFilter,
  setAreaFilterChecked,
  setAreaFilterUnchecked,
  setBrandFilterChecked,
  setBrandFilterUnchecked,
  setCountryFilter,
  setSort,
  setCurrentPage,
} = filterSlice.actions;

export default filterSlice.reducer;
