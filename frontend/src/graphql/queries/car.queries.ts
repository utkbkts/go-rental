import { gql } from "@apollo/client";

export const GET_ALL_QUERIES = gql`
  query Cars($query: String, $filters: CarFilters, $page: Int) {
    getAllCars(query: $query, filters: $filters, page: $page) {
      car {
        id
        category
        fuelType
        name
        rentPerDay
        transmission
        year
        images {
          public_id
          url
        }
        ratings {
          count
          value
        }
      }
      pagination {
        resPerPage
        totalCount
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
