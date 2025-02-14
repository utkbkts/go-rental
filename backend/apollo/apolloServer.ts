import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import { Application, json } from "express";
import { carTypeDefs } from "../graphql/typeDefs/carTypeDefs";
import { carResolvers } from "../graphql/resolvers/carResolvers";

export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs];
  const resolvers = [carResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  app.use("/graphql", json(), expressMiddleware(apolloServer) as any);
}
