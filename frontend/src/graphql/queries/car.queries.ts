import {gql} from "@apollo/client"

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
`