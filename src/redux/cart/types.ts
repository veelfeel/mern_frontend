export type CartItem = {
  _id: string;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
