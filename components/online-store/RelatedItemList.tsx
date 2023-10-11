'use client'
import ProductCard from './ProductCard'
import { RelatedProductData } from '@/type'

const RelatedItemList = ({data}:RelatedProductData) => {
  return (
    <div className='pb-5 md:pb-11'>
        {data && data?.length > 0 && (
          <>
            <p className="text-center text-2xl my-10">You may also like</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((product) => (
                  <ProductCard key={product.node.handle} data={product} />
                ))}
                </div>
            <div className="text-center">

            </div>
          </>
        )}
    </div>
  )
}

export default RelatedItemList