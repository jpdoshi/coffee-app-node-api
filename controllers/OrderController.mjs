import OrderModel from "../models/OrderModel.mjs";

export const getAllOrders = async (req, res) => {
  try {
    const data = await OrderModel.find();

    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getOrderByUserEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const order = await OrderModel.find({ userEmail: email });

    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ error: "Could not find order" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { email, coffeeId, count, price } = req.body;
    const order = await OrderModel.create({
      item: coffeeId,
      userEmail: email,
      count,
      price,
    });

    if (order) {
      res.send(order);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const removeOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findByIdAndDelete(id);

    res.send(order);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
