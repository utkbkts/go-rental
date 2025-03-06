import { gql } from "@apollo/client";

export const NEW_BOOKING_MUTATION = gql`
  mutation CreateBooking($bookingInput: BookingInput!) {
    createBooking(bookingInput: $bookingInput) {
      id
    }
  }
`;
