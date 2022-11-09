export interface FilterSliceState {
  searchValue: string;
  inverterFilter: string[];
  areaFilter: string[];
  brandFilter: string[];
  countryFilter: string;
  page: number;
}

export type FilterProductParams = {
  search: string;
  inverter: string;
  area: string;
  brand: string;
  country: string;
  page: number;
};
