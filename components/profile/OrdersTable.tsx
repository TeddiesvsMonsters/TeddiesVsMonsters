"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/images/profile_image.png";
import { getUserOrders } from "@/services/orders";
import {Orders} from '@/type/orders'
import ProductDropDown from "./ProfileDropDown";
import { useSession } from "next-auth/react";
import  MyModal  from '@/components/modal'

import { useRouter } from 'next/navigation';


interface CustomUser{
  id:number
}
const OrdersTable = () => {
/*   const [orderList, setOrderList] = useState<Orders[]>([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data: session, status, update } = useSession();
  const { push } = useRouter();

  const onModalButtonClick = () => {
    console.log("redirect to login")
    push('/login')
    setModalIsOpen(false);
  }

  useEffect( () =>{
    const user: CustomUser = session?.user as CustomUser;
    let userID = 0;
    if(user?.id){
      userID = user.id
      fetchOrders(userID);
    }else{
      setModalIsOpen(true);
    }
  },[])

  async function fetchOrders(userID:number){
      let testOrder = await getUserOrders(userID);
      setOrderList(testOrder);
  }

  function formatDate(dateString: string | null | undefined ) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const isdefined = (dateString)? dateString: '';
    const date = new Date(isdefined);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const amPm = hour >= 12 ? 'pm' : 'am';
  
    const formattedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const formattedMinute = minute.toString().padStart(2, '0');
  
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${formattedHour}:${formattedMinute}${amPm}`;
  
    return formattedDate;
  }
  const renderOrders = (orders: Orders[]) => {
    return orders.map((order: Orders) => {
      const formattedDate = formatDate(order.date);
      return (
        <tr key={order.orderID} className="bg-white text-black pl-2 w-1/2">
          <td className="text-center">#{order.orderID}</td>
          <td className="text-center">
            <ProductDropDown products={order.products} />
          </td>
          <td className="text-center">{formattedDate}</td>
          <td className="text-center">{order.status}</td>
          <td className="text-center">${order.total}.00</td>
        </tr>
      );
    });
  };
  return (
    <>
    <MyModal  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title="User not Found" paragraph="Please authenticate to see this page" button="Login" onModalButtonClick={onModalButtonClick} />
      <table className="w-full shadow-md rounded bg-black border-separate border-spacing-y-3 ">
        <thead className="bg-fuchsia-950 tracking-wide">
          <tr className="uppercase">
          <th className="font-light">order id</th>
            <th className="font-light py-4">product</th>
            <th className="font-light">date</th>
            <th className="font-light">status</th>
            <th className="font-light">total</th>
          </tr>
        </thead>
        <tbody>{renderOrders(orderList)}</tbody>
      </table>
      </>
  ); */
};

export default OrdersTable;
