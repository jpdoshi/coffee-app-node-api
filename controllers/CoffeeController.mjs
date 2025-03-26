import CoffeeModel from "../models/CoffeeModel.mjs";

export const getCoffeeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    let data;

    if (category != "All")
      data = await CoffeeModel.find({ category }).sort("name");
    else data = await CoffeeModel.find().sort("name");

    if (data) {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getCoffeeById = async (req, res) => {
  try {
    const { _id } = req.params;
    const coffee = await CoffeeModel.findById(_id);

    if (coffee) {
      res.send(coffee);
    } else {
      res.status(404).send({ error: "Could not find coffee" });
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

      res.send(categories.sort());
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
