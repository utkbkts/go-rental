import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import { Application, json } from "express";
import { carTypeDefs } from "../graphql/typeDefs/car.typeDefs";
import { carResolvers } from "../graphql/resolvers/car.resolvers";
import { userTypeDefs } from "../graphql/typeDefs/user.typeDefs";
import { userResolvers } from "../graphql/resolvers/user.resolvers";
export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs, userTypeDefs];
  const resolvers = [carResolvers, userResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  app.use(
    "/graphql",
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer) as any
  );
}
