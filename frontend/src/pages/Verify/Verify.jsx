import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'; // ✅ Also make sure axios is imported

const Verify = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
      const response = await axios.post(`${url}/api/orders/verify?success=${success}&orderId=${orderId}`);
      if (response.data.success) {
      alert('Order verified successfully');
      navigate('/myOrders');

      } else {
      alert('Order verification failed');
      navigate('/');
      console.error('Verification error:', response.data.message);
      }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
