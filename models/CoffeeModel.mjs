import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

coffeeSchema.index({ title: "text" });

const CoffeeModel = mongoose.model("Coffee", coffeeSchema, "coffee-items");
export default CoffeeModel;
