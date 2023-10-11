import BreadCrumb from '@/components/online-store/BreadCrumb';
import ProductDataProvider from '@/components/online-store/ProductDataProvider ';
import RelatedItemList from '@/components/online-store/RelatedItemList';
import { storeFront } from '@/lib/storeFront';
const gql = String.raw
const singleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      handle
      description
      updatedAt
      tags
      id
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
            id
            quantityAvailable
          }
        }
      }
    }
    products(first: 6) {
      edges {
        node {
          title
          handle
          tags
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
        }
      }
    }
  }
`

const page = async({params}: {params:any}) => {
  const { data } = await storeFront(singleProductQuery, {
    handle: params.productSlug,
  })
  const product = data?.productByHandle
  const relatedProducts = data.products.edges
    .filter((item:any) => item.node.handle !== product.handle)
    .slice(0, 4)

  const images = product.images.edges

  return (
    <div className="bg-black pt-6 md:pt-20 -mt-5 md:mt-0">
      <div className='container mx-auto text-white'>
        <BreadCrumb />
        {product && (
          <>
            <ProductDataProvider singleProductData={product} images={images} />
            {/* Added for shopify */}
            <RelatedItemList data={relatedProducts} />
          </>
        )}
      </div>
    </div>
  )
}

export default page
