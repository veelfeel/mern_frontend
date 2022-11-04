import { Auth, Status } from '../redux/auth/types';
import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];

  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};

// export const getAuthFromLS = () => {
//   const data = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null;

//   return {
//     data: data as Auth | null,
//     status: Status.LOADING,
//   };
// };
