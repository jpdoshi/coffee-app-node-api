import express from "express";
import {
  createCoffee,
  getCategories,
  getCoffeeByCategory,
} from "../controllers/CoffeeController.mjs";

const CoffeeRoutes = express.Router();

CoffeeRoutes.get("/category/:category", getCoffeeByCategory);
CoffeeRoutes.get("/categories", getCategories);
CoffeeRoutes.post("/", createCoffee);

export default CoffeeRoutes;
