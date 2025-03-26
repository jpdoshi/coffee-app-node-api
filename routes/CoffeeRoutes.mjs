import express from "express";
import {
  createCoffee,
  getCategories,
  getCoffeeByCategory,
  getCoffeeById,
} from "../controllers/CoffeeController.mjs";

const CoffeeRoutes = express.Router();

CoffeeRoutes.get("/category/:category", getCoffeeByCategory);
CoffeeRoutes.get("/categories", getCategories);
CoffeeRoutes.get("/:_id", getCoffeeById);
CoffeeRoutes.post("/", createCoffee);

export default CoffeeRoutes;
