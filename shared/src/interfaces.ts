export const CarStatus = ["Draft", "Active"];
export const CarBrand = [
  "Audi",
  "BMW",
  "Ford",
  "Honda",
  "Hyundai",
  "Nissan",
  "Toyota",
];
export const CarCategories = ["Sedan", "Convertible", "SUV", "Hatchback"];
export const CarFuelTypes = ["Petrol", "Diesel"];
export const CarTransmissions = ["Automatic", "Manual"];
export const UserRoles = ["user", "admin"];
export const CarDoors = [2, 4];
export const CarSeats = [2, 4, 5, 7, 8, 9, 10];



export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNo: string;
  avatar?: {
    url: string;
    public_id: string;
  };
  resetPasswordToken: string | undefined;
  resetPasswordExpire: Date | undefined;
  role?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICar {
  id: string;
  name: string;
  description: string;
  status: string;
  rentPerDay: number;
  address: string;
  images: {
    url: string;
    public_id: string;
  }[];
  reviews: string[];
  brand: string;
  year: number;
  transmission: string;
  doors: number;
  fuelType: string;
  milleage: number;
  seats: number;
  power: number;
  category: string;
  ratings: {
    value: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
}
