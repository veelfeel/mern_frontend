export interface FilterSliceState {
  searchValue: string;
  inverterFilter: string[];
  minPriceFilter: string;
  maxPriceFilter: string;
  areaFilter: string[];
  brandFilter: string[];
  countryFilter: string;
  page: number;
}

export type FilterProductParams = {
  search: string;
  inverter: string;
  minPrice: string;
  maxPrice: string;
  area: string;
  brand: string;
  country: string;
  page: number;
};
