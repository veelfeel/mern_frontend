export type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  countInStock: number;
  modes: string;
  power: number;
  invertor: string;
  area: number;
  wifi: string;
  volume: number;
  warranty: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductSliceState {
  total: number;
  limit: number;
  products: Product[];
  status: Status;
}

export interface ProductData {
  total: number;
  limit: number;
  products: Product[];
}
