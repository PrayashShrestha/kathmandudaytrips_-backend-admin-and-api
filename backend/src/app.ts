import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/User";

import { errorHandlerMiddleware } from "./middlewares";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use(errorHandlerMiddleware);

export default app;
