import ProductSlider from "./ProductSlider"
import ProductDescription from "./ProductDescription"
import { Images, ProductType } from "@/type"


const ProductDataProvider  = ({singleProductData, images}: {singleProductData:ProductType, images:Images[]}) => {
  return (
    <>
      {singleProductData  && (
        <>
          <div className='flex flex-wrap gap-6 px-4 justify-between md:px-0 lg:flex-nowrap mt-4'>
            <ProductSlider images={images} />
            <ProductDescription data={singleProductData}/>
          </div>

        </>
      )}
    </>
  )
}

export default ProductDataProvider 