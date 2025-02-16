import { gql } from "@apollo/client";

export const GET_ALL_QUERIES = gql`
  query GetAllCars {
    getAllCars {
      id
      name
      description
      status
      rentPerDay
      address
      year
      power
      milleage
      brand
      transmission
      fuelType
      seats
      doors
      category
      createdAt
      updatedAt
      images {
        public_id
        url
      }
      ratings {
        count
        value
      }
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query Query($carId: ID!) {
    getCarById(carId: $carId) {
      id
      name
      description
      updatedAt
      createdAt
      status
      rentPerDay
      address
      year
      power
      category
      doors
      seats
      fuelType
      transmission
      brand
      milleage
      images {
        url
        public_id
      }
      ratings {
        value
        count
      }
    }
  }
`;
