import { IUser } from "shared";
import { createBooking } from "../../controllers/booking.controller";
import { BookingInput } from "../../types/booking.types";
export const bookingResolvers = {
  Mutation: {
    createBooking: async (
      _: any,
      { bookingInput }: { bookingInput: BookingInput },
      { user }: { user: IUser }
    ) => createBooking(bookingInput, user.id),
  },
};
