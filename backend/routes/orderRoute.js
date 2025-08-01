import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {placeOrder, userOrders, verifyOrder, listOrders, updateStatus } from '../controllers/orderController.js';

const orderRouter = express.Router();   

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userOrders', authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
// orderRouter.post('/status',updateStatus);
orderRouter.put('/update/:orderId', updateStatus); 

export default orderRouter;