import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config

const app = express();
const port = process.env.PORT || 4000;

//middleware

app.use(express.json());
app.use(cors());

//DB connection

connectDB();

//api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

//mongodb+srv://jigarhingu46:5252552@cluster0.ncwq6qi.mongodb.net/?
