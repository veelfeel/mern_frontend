import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterProductParams, Product, ProductSliceState, Status } from './types';

import axios from '../../axios';

export const fetchProducts = createAsyncThunk<
  Product[],
  FilterProductParams,
  { rejectValue: string }
>('products/fetchProducts', async (params, { rejectWithValue }) => {
  try {
    const { search } = params;
    const { data } = await axios.get(`/api/products?${search}`);
    return data as Product[];
  } catch (error) {
    console.log(error);
    return rejectWithValue('Не удалось получить продукты');
  }
});

export const fetchRemoveProduct = createAsyncThunk<object, string, { rejectValue: string }>(
  'products/fetchRemoveProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`);
      return data as object;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Не удалось удалить продукт');
    }
  },
);

const initialState: ProductSliceState = {
  products: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.products = [];
    });

    builder.addCase(fetchRemoveProduct.pending, (state, action) => {
      state.products = state.products.filter((x) => x._id !== action.meta.arg);
    });
  },
});

export default productsSlice.reducer;
