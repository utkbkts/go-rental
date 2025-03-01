import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import { Application, json, Request, Response } from "express";
import { carTypeDefs } from "../graphql/typeDefs/car.typeDefs";
import { carResolvers } from "../graphql/resolvers/car.resolvers";
import { userTypeDefs } from "../graphql/typeDefs/user.typeDefs";
import { userResolvers } from "../graphql/resolvers/user.resolvers";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "../middlewares/permissions";
import jwt from "jsonwebtoken"
import User from "../models/user.model";

interface CustomJWTPayload{
  _id:string
}



export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs, userTypeDefs];
  const resolvers = [carResolvers, userResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schemaWithMiddleware = applyMiddleware(schema,permissions)

  const apolloServer = new ApolloServer({
    schema:schemaWithMiddleware,
  });

  await apolloServer.start();
  app.use(
    "/graphql",
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }: { req: Request; res: Response }) => {
        const token = req.cookies?.token;
        let user = null;
        if(token){
          try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET!) as CustomJWTPayload
            user = await User.findById(decoded?._id)

            if (!user){
              throw new Error("User not found")
            }
          } catch (error) {
            throw new Error("Invalid or expired token")
          }
        }
        return { req, res, user };
      },
    })
  );
}
