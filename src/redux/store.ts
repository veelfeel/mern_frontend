import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import filters from './filters/slice';
import products from './product/slice';
import cart from './cart/slice';
import auth from './auth/slice';

export const store = configureStore({
  reducer: {
    filters,
    products,
    cart,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
