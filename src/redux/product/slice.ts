import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchRemoveProduct } from './asyncThunk';
import { ProductSliceState, Status } from './types';

const initialState: ProductSliceState = {
  total: 0,
  limit: 0,
  brands: [],
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
      state.total = 0;
      state.limit = 0;
      state.brands = [];
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.brands = action.payload.brands;
      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.total = 0;
      state.limit = 0;
      state.brands = [];
      state.products = [];
    });

    builder.addCase(fetchRemoveProduct.pending, (state, action) => {
      state.products = state.products.filter((x) => x._id !== action.meta.arg);
    });
  },
});

export default productsSlice.reducer;
