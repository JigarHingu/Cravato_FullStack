// import { request } from "express";
import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
        const { token } = req.headers;
        if (!token) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        try {
            const token_decord = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = token_decord.id;
            next();
        } catch (error) {
            if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
        } else {
            return res.status(400).json({ success: false, message: "Invalid token." });
        }
        }
    };

export default authMiddleware;

// const authMiddleware = (req, res, next) => {
//   const { token } = req.headers;

//   if (!token) {
//     return res.status(401).json({ success: false, message: "Access denied. No token provided." });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = decoded.id; // Attach user ID to request
//     next();
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
//     } else {
//       return res.status(400).json({ success: false, message: "Invalid token." });
//     }
//   }
// };

// export default authMiddleware;
