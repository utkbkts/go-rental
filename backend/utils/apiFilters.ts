import mongoose from "mongoose";

class APIFilters {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  search(query: string) {
    const searchWords = [
      "year",
      "category",
      "doors",
      "fuelType",
      "name",
      "power",
      "seats",
      "transmission",
    ];
    const searchById = {
      _id: query,
    };
  
    const searchByKeyword = {
      $or: searchWords.map((field) => ({
        [field]: isNaN(Number(query))
          ? { $regex: query, $options: "i" }
          : Number(query),
      })),
    };
    const searchQuery = query
      ? mongoose.isValidObjectId(query)
        ? searchById
        : searchByKeyword
      : {};

    this.model = this.model.find({ ...searchQuery });
    return this;
  }
}

export default APIFilters;
