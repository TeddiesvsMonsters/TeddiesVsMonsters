'use client'
import { sortFunction } from '@/lib/sort'
import { ProductNode } from '@/type'
import { create } from 'zustand'

type UseProductStore = {
  product: ProductNode[] | null,
  products: ProductNode[] | null,
  displayedProducts: ProductNode[] | null,
  filterByCategory: (category: string) => void,
  sortProducts: (sortVal: string) => void,
  searchByName: (keyword: string) => void,
}

const useProductsStore = create<UseProductStore>()((set) => ({
  product: [],
  products: null,
  displayedProducts: null,
  filterByCategory: (category) => set((state) => {
    if(category === '') {
      return ({displayedProducts: state.products})
    }
   return ({displayedProducts: state.products?.filter(product => category === product.node.productType)})
  }),

  sortProducts: (sortVal) => set((state) => {
    sortFunction({sortVal, state})
    return ({displayedProducts: state.displayedProducts})
  }),

  searchByName: (keyword) => set((state) => {
    return ({displayedProducts: keyword !== '' ? state.products?.filter(product => product.node?.title?.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) : state.products})
  }),

}))

export default useProductsStore