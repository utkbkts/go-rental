import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import Booking from "../models/booking.model";
import { BookingInput } from "../types/booking.types";

export const createBooking = catchAsyncErrors(
  async (bookingInput: BookingInput, userId: string) => {
    const newBooking = await Booking.create({
      ...bookingInput,
      user: userId,
    });
    return newBooking;
  }
);
