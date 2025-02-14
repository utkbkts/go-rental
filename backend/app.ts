import express from "express";
import dotenv from "dotenv";
import { DbConnect } from "./db/dbConnect";
import cookieParser from "cookie-parser";
import cors from "cors";
import { startApolloServer } from "./apollo/apolloServer";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 4000;
DbConnect();
async function startServer() {
  await startApolloServer(app);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
  });
}

startServer();
