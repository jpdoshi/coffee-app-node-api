import CoffeeModel from "../models/CoffeeModel.mjs";

export const getCoffeeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const data = await CoffeeModel.find({ category });

    if (data) {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const data = await CoffeeModel.find({}, { category: 1 });

    if (data) {
      let categories = [];

      for (const item of data) {
        if (!categories.includes(item.category)) {
          categories.push(item.category);
        }
      }

      res.send(categories);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createCoffee = async (req, res) => {
  try {
    const { name, price, description, ingredients, imageUrl, category } =
      req.body;
    const data = await CoffeeModel.create({
      name,
      price,
      description,
      ingredients,
      imageUrl,
      category,
    });

    if (data) {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
