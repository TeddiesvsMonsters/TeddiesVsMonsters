'use client'
import { IoMdClose } from 'react-icons/io'
import { Dispatch, SetStateAction, useState } from 'react'
import CartItems from './CartItems'
import  MyModal  from '@/components/modal'
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import Button from '@/components/Button';
import useCartStore from '@/store/useCartStore'
import { storeFront } from '@/lib/storeFront'


interface ShoppingCartProps {
    openCart: boolean,
    setOpenCart: Dispatch<SetStateAction<boolean>>
    referer: string | null
}

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

const ShoppingCart = ({openCart, setOpenCart, referer}:ShoppingCartProps) => {

  const {cart} = useCartStore()

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: session, status, update } = useSession();
  const { push } = useRouter();

  const onModalButtonClick = () => {
    console.log("redirect to login")
    push('/login')
    setModalIsOpen(false);
  }
  const onClick = async() => {
    setOpenCart(false)
  

    let lineItems = cart.map((cartItem: any) => ({
      variantId: cartItem.data.variants.edges[0].node.id,
      quantity: cartItem.orderQuantity,
    }))

    console.log({lineItems},cart);

    const { data } = await storeFront(checkoutMutation, { lineItems })
    console.log(data)
    const { webUrl } = data.checkoutCreate.checkout
    push(webUrl)
    }
  
  return (
    <>
      <MyModal  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title="Please login to continue" paragraph="" button="Login" onModalButtonClick={onModalButtonClick} />
      <div className={`
          ${openCart ? 'right-0' : '-right-full'}
          absolute top-0 py-7 px-4 bg-black h-screen border-x border-white w-80 duration-300 overflow-y-auto z-50`
      }>
        <div className="flex justify-between text-lg border-b border-white mb-5">
            <h4>Your cart</h4>
            <button className='-mt-10' onClick={() => setOpenCart(false)}><IoMdClose className='text-white text-2xl' /></button>
        </div>
        <CartItems referer={referer} />
         <Button type='button'  width="w-full" onClick={onClick} >Purchase</Button>
      </div>
    </>
  )
}

export default ShoppingCart