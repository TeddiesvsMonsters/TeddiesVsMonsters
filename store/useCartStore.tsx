'use client'
import { create } from 'zustand'
import { CartType, ProductType } from '@/type'

type UseProductStore = {
  cart: CartType[],
  totalCartPrice: number,
  addItem: (item: ProductType, quantity: number) => void,
  deleteItem: (item: ProductType) => void,
  updateItem: (item: ProductType, quantity: number) => void,
  addPrice: (price: number) => void,
  subtractPrice: (price: number) => void,
  reloadCart: (cart: CartType[], totalCartPrice:number) => void;
  clearCart: () => void;
}

const useCartStore = create<UseProductStore>()((set) => ({
  cart: [],
  totalCartPrice: 0,
  addItem: (item, quantity) => set((state) => ({cart: [...state.cart , {data: item, orderQuantity: quantity}]})),
  deleteItem: (item) => set((state) => ({ cart: state.cart?.filter((cartItem) => cartItem.data.handle !== item.handle)})),
  updateItem: (item, quantity) => set((state) => ({ cart: state.cart?.map((cartItem) => {
    if(cartItem.data.handle === item.handle) {
    return {...cartItem, orderQuantity: cartItem.orderQuantity + quantity}
    }
    return cartItem
  })})),
  addPrice: (price) => set((state) => ({totalCartPrice: state.totalCartPrice + price})),
  subtractPrice: (price) => set((state) => ({totalCartPrice: state.totalCartPrice - price})),
  reloadCart: (cart, totalCartPrice) => set({cart, totalCartPrice}),
  clearCart: () => set({cart: [], totalCartPrice: 0})
}))

export default useCartStore