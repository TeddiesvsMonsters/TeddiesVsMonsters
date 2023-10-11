"use client";
import { useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/images/profile_image.png";

type Order = {
  id: number;
  product: string;
  orderId: number;
  date: Date;
  status: string;
  total: number;
};

const orderList: Order[] = [
  {
    id: 1,
    product: "Mug",
    orderId: 1001,
    date: new Date("2023/2/2"),
    status: "shipped",
    total: 50.0,
  },
  {
    id: 2,
    product: "T-shirt",
    orderId: 1002,
    date: new Date("2023/2/2"),
    status: "processing",
    total: 25.0,
  },
  {
    id: 3,
    product: "Hoodie",
    orderId: 1901,
    date: new Date("2023/2/2"),
    status: "shipped",
    total: 50.0,
  },
  {
    id: 4,
    product: "Board Game",
    orderId: 1302,
    date: new Date("2023/2/2"),
    status: "processing",
    total: 25.0,
  },
];

const OrdersTable = () => {
  const [searchOrder, setSearchOrder] = useState("");
  const [searchDate, setSearchDate] = useState("");

  //Fetch ordersProduct
  const renderOrders = (orderList: Order[]) => {
    return orderList.map((order: Order) => {
      return (
        <tr key={order.id} className="bg-white text-black">
          <td className="py-2">
            <Image
              className="ml-2 mt-2 mb-0"
              src={profileImage}
              alt="profile-image"
              width={50}
              height={50}
            />
          </td>
          <td>{order.product}</td>
          <td>{order.orderId}</td>
          <td>{order.status}</td>
          <td>{order.total}</td>
          <td>
            ...
          </td>
        </tr>
      );
    });
  };
  return (
    // Add styles and functionalities table
    // Add menu and ask what menu does
    // Fetch orders

    <div>
      <div className="flex justify-end my-5">
        <input
          type="text"
          placeholder="# order number"
          className="px-3 py-2 mx-2 rounded-md"
          value={searchOrder}
          onChange={() => setSearchOrder}
        />
        <input
          type="text"
          placeholder="23-Jun-8"
          className="px-3 py-2 rounded-md"
          value={searchDate}
          onChange={() => setSearchDate}
        />
      </div>
      <table className="w-full bg-black text-center border-separate border-spacing-y-3">
        <thead className="bg-fuchsia-950">
          <tr className="uppercase">
            <th className="font-light py-4">product</th>
            <th className="font-light">order id</th>
            <th className="font-light">date</th>
            <th className="font-light">status</th>
            <th className="font-light">total</th>
            <th className="font-light">-- menu --</th>
          </tr>
        </thead>
        <tbody>{renderOrders(orderList)}</tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
