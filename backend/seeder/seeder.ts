import mongoose from "mongoose";
import Car from "../models/car.model";
import { cars } from "./data";

const Seeder = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/go-rental");

    await Car.deleteMany({});
    console.log("Cars deleted");

    await Car.insertMany(cars);
    console.log("Cars addedd");

    process.exit();
  } catch (error: any) {
    console.log(error.message);
    process.exit();
  }
};
Seeder();
