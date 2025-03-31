import express from "express";
import {
  getAllOrders,
  getOrderByUserEmail,
  createOrder,
  removeOrderById,
} from "../controllers/OrderController.mjs";

const OrderRoutes = express.Router();

OrderRoutes.get("/", getAllOrders);
OrderRoutes.post("/email", getOrderByUserEmail);
OrderRoutes.post("/", createOrder);
OrderRoutes.delete("/:id", removeOrderById);

export default OrderRoutes;
