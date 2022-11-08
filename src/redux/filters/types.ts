export interface FilterSliceState {
  searchValue: string;
  brandFilter: string[];
  page: number;
}

export type FilterProductParams = {
  search: string;
  brand: string;
  page: number;
};
