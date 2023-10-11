'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAddToCart from '@/hooks/useAddToCart'
import Button from '../Button'
import { ProductData } from '@/type'
import useCartStore from '@/store/useCartStore'
import  MyModal  from '../modal'
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { storeFront } from '@/lib/storeFront'

const gql = String.raw
const checkoutMutation = gql`
mutation CheckoutCreate($lineItems: [CheckoutLineItemInput!]) {
  checkoutCreate(
    input: { lineItems: $lineItems }
  ) {
    checkout {
      webUrl
    }
  }
}
`

const ProductDescription = ({data}:ProductData) => {
  const [quantity, setQuantity] = useState<number>(1)
  const {addToCart} = useAddToCart()
  const { cart, totalCartPrice} = useCartStore()
  const [purchaseNow, setPurchaseNow] = useState(false);

  useEffect(() => {
    if(purchaseNow) {
    /* !session && setModalIsOpen(true) */

    let lineItems = cart.map((cartItem: any) => ({
      variantId: cartItem.data.variants.edges[0].node.id,
      quantity: cartItem.orderQuantity,
    }))

    console.log({lineItems});

    storeFront(checkoutMutation, {lineItems}).then(({data: {checkoutCreate : { checkout: {webUrl} }}}) => push(webUrl))
    } 

   setPurchaseNow(false)
  },[purchaseNow])

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('totalCartPrice',JSON.stringify(totalCartPrice))
  },[cart,addToCart])

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: session, status, update } = useSession();
  const { push } = useRouter();

  const onModalButtonClick = () => {
    push('/login')
    setModalIsOpen(false);
  }

  return (
    <>
    <MyModal  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title="Please login to continue" paragraph="" button="Login" onModalButtonClick={onModalButtonClick} />
    <div className='flex flex-col justify-between w-full lg:w-2/5'>
          <div>
            <h2 className="font-bold text-2xl md:text-4xl mb-2">{data.title}</h2>
              <span className="text-lg md:text-2xl"><span>${data.priceRange.minVariantPrice.amount}</span> CAD</span>
          </div>
          <p className="my-5 text-slate-400">Shipping Calculated at Checkout</p>
          <p className="mb-8">{data.description}</p>

          {/* Need to add "href" but don't know jump to where? */}
          <div>
            <p className='text-slate-400'>Pay in 4 interest-free instalments of $197.50 with <span className="text-white">SHOP PAY</span>.</p>
            <Link className='text-slate-400 underline' href={'#'} >Learn more</Link>
          </div>

        <form>
          <div className='my-5'>
            Quantity: 
            <select name="qty" className='text-black p-2 rounded ml-2 mr-10 inline-block' onChange={(e) => setQuantity(Number(e.target.value))}>
              {data.variants.edges[0].node.quantityAvailable === 0 ? <option disabled defaultValue={0} >0</option> : 
              (
                <>
                <option value="1" disabled={data.variants.edges[0].node.quantityAvailable < 1}>1</option>
                <option value="2" disabled={data.variants.edges[0].node.quantityAvailable < 2}>2</option>
                <option value="3" disabled={data.variants.edges[0].node.quantityAvailable < 3}>3</option>
                <option value="4" disabled={data.variants.edges[0].node.quantityAvailable < 4}>4</option>
                <option value="5" disabled={data.variants.edges[0].node.quantityAvailable < 5}>5</option>
                </>
              )}
            </select>
            <Button sm={true} onClick={(e) => addToCart(e, data, quantity)}>Add to cart</Button>
            {data.variants.edges[0].node.quantityAvailable <= 5 && (<p className='mt-4 text-red-700 font-semibold text-xs'>*Only {data.variants.edges[0].node.quantityAvailable} left in stock</p>)}
          </div>
        </form>

          <div className='mt-5'>
            <Button onClick={(e) => {
             addToCart(e, data, quantity)
             setPurchaseNow(true)
            }}>Purchase Now</Button>
          </div>
    </div>
    </>
  )
}

export default ProductDescription