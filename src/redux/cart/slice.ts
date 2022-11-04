import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/localStorage';
import { RootState } from '../store';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add product from cart
    addCartItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);

      if (!findItem) {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      } else {
        findItem.count++;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    // decrement counter
    minusCartItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj._id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    // remove product from cart
    removeCartItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj._id !== action.payload);

      state.totalPrice = calcTotalPrice(state.items);
    },
    // remove all products from cart
    clearCartItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addCartItem, minusCartItem, removeCartItem, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
