import { registerUser } from "../../controllers/user.controllers";
import { UserInput } from "../../types/user.types";

export const userResolvers = {
  Query: {
    me: async (_: any) => {
      return "current user";
    },
  },
  Mutation: {
    registerUser: async (_: any, { userInput }: { userInput: UserInput }) => {
      return registerUser(userInput);
    },
  },
};
