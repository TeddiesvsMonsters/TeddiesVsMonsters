'use client'
import useProductsStore from '@/store/useProductStore'
import SelectBox from '../SelectBox'
import { storeFront } from '@/lib/storeFront'

const gql = String.raw
const categoriesQuery = gql`query ProductTypes {
  productTypes(first: 10) {
    edges {
      node
    }
  }
}`

const FilterSortDropdowns = async() => {
    const {filterByCategory, sortProducts} = useProductsStore()
    const SORT_VALUES = ['New to old','Old to new', 'Price:Low to high', 'Price:High to low', 'Name:A to Z', 'Name:Z to A']
    const {data} = await storeFront(categoriesQuery)
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-0">
    <h3 className="font-semibold text-lg">Online Store</h3>
        <div className="flex gap-6">
              {data && (
                <SelectBox name='filter' values={data?.productTypes?.edges} onChange={filterByCategory} />
              )}
                <SelectBox name='sort' values={SORT_VALUES} onChange={sortProducts} />
        </div>
    </div>
  )
}

export default FilterSortDropdowns