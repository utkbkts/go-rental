import mongoose from "mongoose";

export const DbConnect = async () => {
  try {
    let connectionString: string | undefined = "";

    if (process.env.NODE_ENV === "development") {
      connectionString = process.env.MONGO_URI_LOCAL;
    }
    if (process.env.NODE_ENV === "production") {
      connectionString = process.env.MONGO_URI;
    }

    if (!connectionString) {
      throw new Error("MongoDB connection string is undefined.");
    }

    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
