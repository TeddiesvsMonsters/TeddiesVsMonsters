import Image from 'next/image'
import Link from 'next/link'

import { ProductNodeData } from '@/type'
import like from '@/assets/images/OnlineStore_ Like.png'

const ProductCard = ({data}:ProductNodeData) => {
  return (
    (data && 
      <Link href={{pathname:`/online-store/${data.node.handle}`, query: {category: 1}}}
            className="border p-4 relative 
                  after:content-[''] after:block after:absolute after:h-full after:top-0 after:left-0 after:right-0 after:bg-gradient-to-b after:from-purple-700 after:to-transparent after:opacity-0 hover:after:opacity-50 after:duration-300"
      >
          <div className="text-right">
              <button className="relative z-10"><Image src={like} alt="" width={20} height={20} /></button>
          </div>
          <div className="my-10 relative">
            {data.node.images && (
              <Image className="mx-auto text-black w-[260px] h-[290px] object-contain" src={data.node.images.edges[0].node.transformedSrc} alt={data.node.images.edges[0].node.altText || 'Product'} width={260} height={290} />
            )}
          </div>
          <h3 className='font-semibold'>{data.node.title}</h3>
          <p><span>$ {data.node.priceRange && data.node.priceRange.minVariantPrice.amount}</span> CAD</p>
      </Link>
      )
 
  )
}

export default ProductCard