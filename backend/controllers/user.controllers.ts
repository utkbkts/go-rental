import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import User from "../models/user.model";
import { UserInput } from "../types/user.types";

export const registerUser = catchAsyncErrors(async (userInput: UserInput) => {
  const { email, name, password, phoneNo } = userInput;

  return await User.create({
    name,
    email,
    password,
    phoneNo,
  });
});
