'use client'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import useProductsStore from '@/store/useProductStore'
import PaginationControls from './PaginationControls'
import { ProductNode, ProductType } from '@/type'

const ProductList = ({allData, page}: {allData: ProductNode[], page: string | string[]}) => {
  const {displayedProducts} = useProductsStore()
  const start = (Number(page) - 1) * 12
  const end = start + 12
  const entries = displayedProducts?.slice(start,end)

  useEffect(() => {
    useProductsStore.setState({products: allData, displayedProducts: allData})
  },[])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4">
          {entries && entries.length > 0 && entries.map((product) => (
              <ProductCard key={product.node.handle} data={product} />
          ))}
      </div>
      {displayedProducts && (
        <PaginationControls hasNextPage={end < displayedProducts.length} hasPrevPage={start > 0} />
      )}
    </>
  )
}

export default ProductList
