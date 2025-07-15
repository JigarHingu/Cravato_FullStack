import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import {assets} from '../../assets/assets.js';

const Orders = ({ url }) => {

  const [Orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/orders/list");
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Something went wrong while fetching orders");
    }
  };

  const statusHandler = async (orderId, status) => {
    const response = await axios.put(url + "/api/orders/update/" + orderId, { status });
    if (response.data.success) {
      toast.success("Order status updated successfully");
      fetchAllOrders();
    } else {
      toast.error("Failed to update order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="orders add">
      <h2>Order Page</h2>
      <div className="orders-list">
        {Orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon"/>
            <div>
              <p className='order-item-food'>
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name + " (x" + item.quantity + ")"}
                    {idx !== order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
              <p>{order.address.street+", "}</p>
              <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipCode+", "}</p>
              </div>
              <p className='order.address.phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Total : ₹{order.amount}</p>
            <select onChange={(event) => statusHandler(order._id, event.target.value)} value={order.status}>
            <option value = "Food Processing">Food Processing</option>
            <option value = "Out For Delivery">Out For Delivery</option>
            <option value = "Delivered">Delivered</option>
            <option value = "Cancelled" >Cancelled</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
