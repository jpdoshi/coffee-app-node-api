import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coffee",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: "V.J. Modi School, 150ft Ring Road",
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const OrderModel = mongoose.model("Order", orderSchema, "orders");
export default OrderModel;
