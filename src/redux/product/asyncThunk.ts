import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilterProductParams } from '../filters/types';
import { ProductData } from './types';
import axios from '../../axios';

export const fetchProducts = createAsyncThunk<
  ProductData,
  FilterProductParams,
  { rejectValue: string }
>('products/fetchProducts', async (params, { rejectWithValue }) => {
  try {
    const { search, inverter, area, brand, country, page } = params;
    const { data } = await axios.get(
      `/api/products?page=${page}${inverter}${area}${brand}${country}${search}`,
    );
    // console.log(data);
    return data as ProductData;
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
