import gql from "graphql-tag";

export const paymentTypeDefs = gql`
  type StripeSession {
    url: String
  }
`;
