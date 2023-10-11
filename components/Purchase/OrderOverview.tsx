// 'use client'
// import useCartStore from "@/store/useCartStore";
// import OrderOverviewProduct from "./OrderOverviewProduct";
// import { config } from "@/config";

// const OrderOverview = () => {

//   const { cart } = useCartStore()

//   console.log(cart);
//   return (
//     <div className='overflow-y-auto md:w-1/2 lg:w-1/3 md:h-[1000px] md:border-l border-white mx-10 md:mx-0 mt-12 md:mt-0 md:pl-6'>
//       <div className="container md:pr-5">
//         <h3 className="text-xl font-bold">Order Overview</h3>
//         {/* <div className="grid grid-cols-1 gap-3">           */}
//         <div className="">
//           {cart && cart.length > 0 && cart.map((cartProduct) => (
//             <OrderOverviewProduct cartProduct={cartProduct} key={cartProduct.data.id} />
//           )) } 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderOverview;