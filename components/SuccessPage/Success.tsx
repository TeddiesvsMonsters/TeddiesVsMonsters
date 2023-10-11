'use client'
import { useEffect } from 'react'
import {BsCheckCircle} from "react-icons/bs"
import { Confetti } from './Confetti'
import { useRouter } from "next/navigation"
import useCartStore from "@/store/useCartStore"
import Button from "../Button"

const Success = () => {
    const {clearCart} = useCartStore()
    const router = useRouter()
    useEffect(() => {
        localStorage.removeItem("cart")
        localStorage.removeItem("totalCartPrice")
        clearCart()
        Confetti()
    },[])

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 h-full my-16 mx-auto p-10 rounded-2xl bg-trackOrder-pc bg-zinc-900  bg-cover">
            <div className="text-center">
                <BsCheckCircle className="mb-12 mx-auto" size={100}/>
                <h1 className="uppercase font-btn text-5xl mb-5">Thank you!</h1>
                <p>Your payment was successful and your older is complete</p>
                <Button width="w-1/2 mx-auto mt-10" onClick={() => router.push('/')}>Back To Home</Button>
            </div>
    </div>
  )
}

export default Success
