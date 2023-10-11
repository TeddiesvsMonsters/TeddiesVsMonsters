import useCartStore from "@/store/useCartStore"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const useFetchLocalStorage = () => {
    const { reloadCart } = useCartStore()
    const path = usePathname()
    useEffect(() => {
        const localCart = localStorage.getItem('cart')
        let totalCartPrice: number  = Number(localStorage.getItem('totalCartPrice'))
        localCart && reloadCart(JSON.parse(localCart),totalCartPrice)
      },[path])
}

export default useFetchLocalStorage