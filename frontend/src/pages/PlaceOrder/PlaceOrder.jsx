import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const { cartItems, getTotalCartAmount, token, food_list, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (event) => {
    event.preventDefault(); 
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/orders/place", orderData, {headers: {token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Something went wrong while placing the order. Please try again.");
    }
  }

  // Function to calculate total count of items
  const getTotalItemCount = () => {
    return Object.values(cartItems).reduce((acc, count) => acc + count, 0);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalItemCount() === 0) {
      alert("Your cart is empty. Please add items to your cart before placing an order.");
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name' />
        </div> 
        <input required name='email' onChange={onChangeHandler} value={data.email}type='email' placeholder='Email Address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
        <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' />
          <input required name='zipCode' onChange={onChangeHandler} value={data.zipCode} type='text' placeholder='zip Code' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub-total</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total Items</p>
              <p>{getTotalItemCount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>$ {getTotalCartAmount()}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
