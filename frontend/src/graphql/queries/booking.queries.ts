import { gql } from "@apollo/client";

export const GET_BOOKING_BY_ID = gql`
  query BookingId($bookingId: String!) {
    getBookingById(bookingId: $bookingId) {
      id
      car {
        name
      }
      startDate
      endDate
      daysOfRent
      rentPerDay
      customer {
        name
        email
        phoneNo
      }
      amount {
        tax
        rent
        discount
        total
      }
      paymentInfo {
        status
      }
      additionalNotes
      createdAt
    }
  }
`;
