export type CartItem = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  type: string;
  size: number;
};

export interface cartSliceState {
  totalPrice: number;
  items: CartItem[];
}