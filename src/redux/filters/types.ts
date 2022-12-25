export enum SortEnum {
  RATING_DESC = "-rating",
  PRICE_ASC = "price",
  PRICE_DESC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortEnum;
};

export interface FilterSliceState {
  searchValue: string;
  inverterFilter: string[];
  minPriceFilter: string;
  maxPriceFilter: string;
  areaFilter: string[];
  brandFilter: string[];
  countryFilter: string;
  sort: Sort;
  pageValue: number;
}

export type FilterProductParams = {
  search: string;
  inverter: string;
  minPrice: string;
  maxPrice: string;
  area: string;
  brand: string;
  country: string;
  sortBy: string;
  order: string;
  page: number;
};

export type FilterProductParamsAdmin = {
  search: string;
  page: string;
};
