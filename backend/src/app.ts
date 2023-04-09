import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/User";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRoutes);

export default app;
