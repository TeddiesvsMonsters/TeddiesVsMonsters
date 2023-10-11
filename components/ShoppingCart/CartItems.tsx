'use client'
import useCartStore from "@/store/useCartStore"
import Image from "next/image"
import { useEffect } from "react"
import { BiTrash } from "react-icons/bi"

const CartItems = ({referer}:{referer:string | null}) => {
    const {cart , totalCartPrice, deleteItem, subtractPrice} = useCartStore()
    useEffect(() => {
        if(referer !== null) {
            localStorage.setItem('cart',JSON.stringify(cart))
            localStorage.setItem('totalCartPrice',JSON.stringify(totalCartPrice))
        }
        console.log(cart);
      },[cart,deleteItem])
  return (
    <>
     <ul>
            {cart && cart?.length > 0 && cart?.map(({data, orderQuantity}, index) => (
            <li key={index} className='flex items-center justify-between mb-5 gap-2'>
                <Image className='w-[50px] h-[50px] object-contain' src={data.images.edges[0].node.transformedSrc} alt="" width={50} height={50} />
                <div className='w-2/4'>
                    <p className='text-sm truncate'>{data.title}</p>
                    Quantity: {orderQuantity}
                </div>
                <div><span>{(Number(data.priceRange.minVariantPrice.amount) * orderQuantity).toLocaleString('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                })}</span></div>
                
                <button onClick={() => {
                    deleteItem(data)
                    subtractPrice(Number(data.priceRange.minVariantPrice.amount) * orderQuantity)
                }}
                >
                    <BiTrash/>
                </button>
            </li>
            ))}
        </ul>
        <p className="font-semibold my-2">Subtotal: ${totalCartPrice.toFixed(2)}</p>
    </>
  )
}

export default CartItems