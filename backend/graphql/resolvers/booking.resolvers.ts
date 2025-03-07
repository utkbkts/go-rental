import { IUser } from "shared";
import {
  createBooking,
  getBookingById,
  getCarBookedDates,
  updateBooking,
} from "../../controllers/booking.controller";
import { BookingInput } from "../../types/booking.types";

export const bookingResolvers = {
  Query: {
    getBookingById: async (
      _: any,
      { bookingId }: { bookingId: string },
      { user }: { user: IUser }
    ) => getBookingById(bookingId, user),
    getCarBookedDates: async (_: any, { carId }: { carId: string }) =>
      getCarBookedDates(carId),
  },
  Mutation: {
    createBooking: async (
      _: any,
      { bookingInput }: { bookingInput: BookingInput },
      { user }: { user: IUser }
    ) => createBooking(bookingInput, user.id),
    updateBooking: async (
      _: any,
      {
        bookingId,
        bookingInput,
      }: { bookingId: string; bookingInput: Partial<BookingInput> },
      { user }: { user: IUser }
    ) => updateBooking(bookingId, bookingInput, user),
  },
};
