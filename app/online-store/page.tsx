import ProductList from "@/components/online-store/ProductList"
import FilterSortDropdowns from "@/components/online-store/FilterSortDropdowns"
import SearchBar from "@/components/online-store/SearchBar"
import PageTitleBanner from "@/components/PageTitleBanner"
import { SearchParams } from "@/type"
import { storeFront } from "@/lib/storeFront"

const gql = String.raw
const productsQuery = gql`
query Products {
  products(first: 100) {
    edges {
      node {
        title
        handle
        tags
        createdAt
        id
        productType
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 3) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              quantityAvailable
            }
          }
        }
      }
    }
  }
}
`

const Page =  async({searchParams}: SearchParams) => {
    let page = searchParams['page'] ?? '1'
    const {data} = await storeFront(productsQuery)
    
  return (
    <div className='bg-black -mt-5 md:mt-0'>
      <PageTitleBanner subtract={true} bgImg={true} line={false}>Merch</PageTitleBanner>
      
      <div className="bg-white w-full">
        <div className="container mx-auto">
          <SearchBar />
          <FilterSortDropdowns />
          <ProductList allData={data?.products?.edges} page={page} />
        </div>
      </div>
    </div>
  )
}

export default Page