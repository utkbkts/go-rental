import { IUser } from "shared";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import Booking from "../models/booking.model";
import { BookingInput } from "../types/booking.types";
import { NotFoundError } from "../utils/errorHandler";

export const createBooking = catchAsyncErrors(
  async (bookingInput: BookingInput, userId: string) => {
    const newBooking = await Booking.create({
      ...bookingInput,
      user: userId,
    });
    return newBooking;
  }
);

export const getBookingById = catchAsyncErrors(
  async (bookingId: string, user: IUser) => {
    const booking = await Booking.findById(bookingId).populate("car");

    if (!booking) {
      throw new NotFoundError("Booking not found");
    }

    if (!user.role?.includes("admin") && booking.user.toString() !== user.id) {
      throw new NotFoundError(
        "You do not have permission to access this action"
      );
    }

    return booking;
  }
);

export const updateBooking = catchAsyncErrors(
  async (
    bookingId: string,
    bookingInput: Partial<BookingInput>,
    user: IUser
  ) => {
    if (!bookingInput) {
      throw new NotFoundError("bookingInput is required");
    }
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new NotFoundError("Booking not found");
    }

    if (!user.role?.includes("admin") && booking.user.toString() !== user.id) {
      throw new NotFoundError(
        "You do not have permission to access this action"
      );
    }

    await booking.set(bookingInput).save();

    return true;
  }
);
