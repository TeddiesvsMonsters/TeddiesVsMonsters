import useCartStore from "@/store/useCartStore"
import { ProductType } from "@/type"

const useAddToCart = () => {
    const {cart, updateItem, addPrice, addItem} = useCartStore()
    
    const addToCart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ProductType, quantity: number) => {
      console.log(typeof(data.priceRange.minVariantPrice.amount))
      e.preventDefault()
      if(cart.length > 0) {
        const target = cart.filter(cartItem => cartItem.data.handle === data.handle)

          if(target.length > 0 && target[0].orderQuantity + quantity <= data.variants.edges[0].node.quantityAvailable && target[0].orderQuantity + quantity <= 5) {
            updateItem(data, quantity)
            addPrice(Number(data.priceRange.minVariantPrice.amount) * quantity)
            return
          }
    
          if(target.length === 0) {
            addItem(data,quantity)
            addPrice(Number(data.priceRange.minVariantPrice.amount) * quantity)
            return
          }

          alert("You can only order a maximum of 5 per item.")
    
        } else {
          addItem(data, quantity)
          addPrice(Number(data.priceRange.minVariantPrice.amount) * quantity)
          return
        }
      }
      
  return {addToCart}
}

export default useAddToCart