// 'use client'
// import Image from 'next/image'
// import bag from '@/assets/images/bag.png'
// import { CartType } from '@/type';

// const OrderOverviewProduct = ({cartProduct}: {cartProduct: CartType}) => {

//   return (
//     <div className="container mx-auto pt-4">
//       <div className="flex gap-6 items-center">
//         <div className='flex-shrink-0'>
//           <Image 
//             className='w-[100px]'
//             src={cartProduct.data.attributes.image.data.attributes.url} 
//             alt="" 
//             height={120} 
//             width={60}
//             />
//         </div>
//         <div>
//           <h4 className='mb-10'>Monster Tote Bag</h4>
//           <table className='table-fixed text-zinc-400 w-full'>
//             <tbody>
//               {/* <tr className='border-t border-zinc-400'>
//                 <td>Color</td>
//                 <td className='text-right'>Pink</td>
//               </tr> */}
//               {/* <tr className='border-t border-zinc-400'>
//                 <td>Size</td>
//                 <td className='text-right'>U</td>
//               </tr> */}
//               <tr className='border-t border-zinc-400'>
//                 <td>Quantity</td>
//                 <td className='text-right'>{cartProduct.orderQuantity}</td>
//               </tr>
//               <tr className='text-white border-t border-zinc-400'>
//                 <td></td>
//                 <td className='row-span-2 text-right'>{(cartProduct.data.attributes.price * cartProduct.orderQuantity).toLocaleString('en-CA', {
//                   style: 'currency',
//                   currency: 'CAD'
//                 })}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderOverviewProduct;