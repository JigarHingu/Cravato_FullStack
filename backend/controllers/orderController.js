// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // placing user order for frontend
// const placeOrder = async (req, res) => {
//   const frontend_url = "http://localhost:5173";

//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100 * 80, // Convert to smallest currency unit
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: "Delivery Charges",
//         },
//         unit_amount: 100 * 80, // it can be used as 2*100*80 there 2 is deleviry charges per order so it will also be counted
//       },
//       quantity: 1,
//     });
//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });
//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ success: false, message: "Failed to place order" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.query;
//   try {
//     if (success === "true") {
//       await orderModel.findByIdAndUpdate(orderId,{payment: true});
//       res.json({ success: true, message: "paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "payment failed" });
//     }
//   } catch (error) {
//     console.error("Error verifying order:", error);
//     res.status(500).json({ success: false, message: "Failed to verify order" });
//   } 
// };

// // User Orders for frontend

// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     res.status(500).json({ success: false, message: "Failed to fetch user orders" });
//   }
// };

// // Listing orders for admin panel
// const listOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find().populate("userId", "name email");
//     res.json({ success: true, orders });
//   } catch (error) {
//     console.error("Error listing orders:", error);
//     res.status(500).json({ success: false, message: "Failed to list orders" });
//   }
// };

// // api for updating order status
// const updateStatus = async (req, res) => {
//   try {
//     await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//     res.json({ success: true, message: "Order status updated successfully" });
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     res.status(500).json({ success: false, message: "Failed to update order status" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };


import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place a new order
const placeOrder = async (req, res) => {
  const frontend_url = "https://cravato-frontend.onrender.com";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.name },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: { name: "Delivery Charges" },
        unit_amount: 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: "Failed to place order" });
  }
};

// Verify payment
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.query;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment failed" });
    }
  } catch (error) {
    console.error("Error verifying order:", error);
    res.status(500).json({ success: false, message: "Failed to verify order" });
  }
};

// Get orders of a user
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: "Failed to fetch user orders" });
  }
};

// Admin: List all orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("userId", "name email");
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error listing orders:", error);
    res.status(500).json({ success: false, message: "Failed to list orders" });
  }
};

// Admin: Update order status
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const orderId = req.params.orderId;

    console.log("Updating order:", orderId, "to status:", status);
    await orderModel.findByIdAndUpdate(orderId, { status });

    res.json({ success: true, message: "Order status updated successfully" });

  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ success: false, message: "Failed to update order status" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
