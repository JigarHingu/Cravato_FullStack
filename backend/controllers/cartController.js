// import { response } from "express";
// import userModel from "../models/userModel.js";

// Add items to user cart

// const addToCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (!cartData[req.body.itemId]) {
//       cartData[req.body.itemId] = 1;
//     } else {
//       cartData[req.body.itemId] += 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Added To Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// Remove items from user cart

// const removeFromCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (cartData[req.body.itemId] > 0) {
//       cartData[req.body.itemId] -= 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
//     res.json({ success: true, message: "Removed From Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// Fetch user cart data
// Get cart data
// const getCart = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     res.json({ success: true, cartData });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ success: false, message: "Error loading cart data" });
//   }
// };

// export { addToCart, removeFromCart, getCart };


import userModel from "../models/userModel.js";
// import { jwtDecode } from "jwt-decode";

// Add items to user cart
const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding to cart" });
  }
};

// const addToCart = async (itemId) => {
//   setCartItems(prev => ({
//     ...prev,
//     [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
//   }));

//   try {
//     await axios.post(`${url}/api/cart/add`, {
//       userId: jwtDecode(token).id, // you need to decode token
//       itemId,
//     });
//   } catch (err) {
//     console.error("Error adding to backend cart:", err);
//   }
// };


// Remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData;
    if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
      if (cartData[req.body.itemId] === 0) {
        delete cartData[req.body.itemId];
      }
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error removing from cart" });
  }
};

// const removeFromCart = async (itemId) => {
//   setCartItems(prev => {
//     const updated = { ...prev };
//     if (updated[itemId]) {
//       updated[itemId] -= 1;
//       if (updated[itemId] <= 0) delete updated[itemId];
//     }
//     return updated;
//   });

//   try {
//     await axios.post(`${url}/api/cart/remove`, {
//       userId: jwtDecode(token).id,
//       itemId,
//     });
//   } catch (err) {
//     console.error("Error removing from backend cart:", err);
//   }
// };



// Fetch user cart data
const getCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: user.cartData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error loading cart data" });
  }
};

export { addToCart, removeFromCart, getCart };
