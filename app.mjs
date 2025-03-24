import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, MONGO_URI } from "./config.mjs";

import CoffeeRoutes from "./routes/CoffeeRoutes.mjs";

try {
  mongoose.connect(MONGO_URI, { dbName: "coffee_app" });
  console.log("Connected to database!");
} catch (err) {
  console.log(err);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/coffee", CoffeeRoutes);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`App is listening on PORT:${PORT}`);
});
