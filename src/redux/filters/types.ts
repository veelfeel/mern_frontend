export interface FilterSliceState {
  searchValue: string;
  page: number;
}

export type FilterProductParams = {
  search: string;
  page: number;
};
