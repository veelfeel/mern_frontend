import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, removeProduct } from "./asyncThunk";
import { ProductSliceState, Status } from "./types";

const initialState: ProductSliceState = {
  total: 0,
  limit: 0,
  inverterTechnology: [],
  areas: [],
  brands: [],
  countries: [],
  products: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.total = 0;
      state.limit = 0;
      state.inverterTechnology = [];
      state.areas = [];
      state.brands = [];
      state.countries = [];
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.inverterTechnology = action.payload.inverterTechnology;
      state.areas = action.payload.areas;
      state.brands = action.payload.brands;
      state.countries = action.payload.countries;
      state.products = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.total = 0;
      state.limit = 0;
      state.inverterTechnology = [];
      state.areas = [];
      state.brands = [];
      state.countries = [];
      state.products = [];
    });

    builder.addCase(removeProduct.pending, (state, action) => {
      state.products = state.products.filter((x) => x._id !== action.meta.arg);
    });
  },
});

export default productsSlice.reducer;
