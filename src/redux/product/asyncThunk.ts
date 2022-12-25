import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FilterProductParams,
  FilterProductParamsAdmin,
} from "../filters/types";
import { ProductData } from "./types";
import axios from "../../axios";

export const fetchProducts = createAsyncThunk<
  ProductData,
  FilterProductParams,
  { rejectValue: string }
>("products/fetchProducts", async (params, { rejectWithValue }) => {
  try {
    const {
      search,
      inverter,
      minPrice,
      maxPrice,
      area,
      brand,
      country,
      sortBy,
      order,
      page,
    } = params;

    const { data } = await axios.get(
      `/api/products?page=${page}${search}${inverter}${minPrice}${maxPrice}${area}${brand}${country}&sortBy=${sortBy}&order=${order}`
    );
    return data as ProductData;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Не удалось получить продукты");
  }
});

export const removeProduct = createAsyncThunk<
  object,
  string,
  { rejectValue: string }
>("products/removeProduct", async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data as object;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Не удалось удалить продукт");
  }
});

export const fetchProductsAdmin = createAsyncThunk<
  ProductData,
  FilterProductParamsAdmin,
  { rejectValue: string }
>("products/fetchProductsAdmin", async (params, { rejectWithValue }) => {
  try {
    const { page, search } = params;

    const { data } = await axios.get(`/api/products${page}${search}`);
    return data as ProductData;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Не удалось получить продукты");
  }
});
