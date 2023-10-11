import { Order, OrderItem, Orders, Products } from '@/type/orders'
import axios from 'axios'

const URL = 'https://teddies-vs-monsters-backend-production.up.railway.app'
//Gets all the orders filtered bu user ID. Populates until order_item
//Returns: Orders = [[orderID, date, status, total, products = [[name, quantity],[name,quantity]]],[orderID, date, status, total, products = [[name, quantity],[name,quantity]]]]

export async function getUserOrders(userId: number) {
  const {
    data: { data },
  } = await axios.get(
    `${URL}/api/orders?filters[user][id][$eq]=${userId}&populate[payment][fields][0]=total&populate[order_items][fieldsL][0]=id`
  )

  const orders: Orders[] = []
  for (const order of data) {
    const orderAttributes = order.attributes
    const ordersDetails = await getOrdersInformation(orderAttributes, order.id)
    orders.push(ordersDetails)
  }

  return orders
}

// From one order, it organizes the data to return and creates a product array.
// Returns an array of individual Orders with:[orderID, date, status, total, products = [[name, quantity],[name,quantity]]]
export async function getOrdersInformation(
  order: Order,
  id: number
): Promise<Orders> {
  const orderID = id
  const date = order.createdAt || ''
  const status = order.status || ''
  const payment = order.payment
  let total = 0
  if (payment?.data?.attributes?.total !== null) {
    total = payment?.data?.attributes?.total || 0
  }
  const products = await getUserOrders_Items(order.order_items)

  return { orderID, date, status, total, products }
}

// Gets all the products from the order-items
// Returns an array of products and the quantity bought of each product.
// products = [[name, quantity], [name, quantity]]
export async function getUserOrders_Items(userOrders: OrderItem | undefined) {
  const products: Products[] = []
  const orderItems = userOrders?.data

  if (Array.isArray(orderItems)) {
    for (const orderItem of orderItems) {
      const productDetails = await getProducts(orderItem.id || 0)
      products.push(productDetails)
    }
  } else {
    console.log('No order items found.')
  }
  return products
}

// From one order-items, it organizes the data to return and creates a product array.
// Returns an array of individual products inside an order-item
// [name,quantity]
export async function getProducts(orderItemID: number): Promise<Products> {
  const {
    data: { data },
  } = await axios.get(
    `${URL}/api/order-items?filters[id][$eq]=${orderItemID}&populate[]=product.name&populate[]=quantity`
  )

  const productName = data[0]?.attributes?.product?.data?.attributes?.name || ''
  const quantity = data[0]?.attributes?.quantity || 0

  return { name: productName, quantity }
}
