import { gql } from "@apollo/client";

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($userInput: UserInput!) {
    registerUser(userInput: $userInput) {
      id
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;
export const UPDATE_PROFILE_MUTATION = gql`
  mutation Mutation($userInput: UpdateUserInput!) {
    updateUserProfile(userInput: $userInput)
  }
`;
