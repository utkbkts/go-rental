import Car from "../models/car.model";
import { CarInput } from "../types/car.types";

export const getAllCars = async () => {
  const car = await Car.find();
  return car;
};

export const createCar = async (carInput: CarInput) => {
  const newCar = await Car.create(carInput);
  return newCar;
};

export const getCarById = async (carId: string) => {
  const car = await Car.findById(carId);

  if (!car) {
    throw new Error("Car not found");
  }

  return car;
};

export const updateCar = async (carId: string, carInput: CarInput) => {
  const car = await Car.findByIdAndUpdate(carId, carInput, {
    new: true,
    runValidators: true,
  });

  if (!car) {
    throw new Error("Car not found");
  }

  return true;
};

export const deleteCar = async (carId: string) => {
  const car = await Car.deleteOne({_id:carId});

  if (!car) {
    throw new Error("Car not found");
  }

  return true;
};