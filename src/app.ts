import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { handleErrors } from "./errors";
import announcementRoutes from "./routes/announcement.route";
import userRoutes from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(handleErrors);

app.use("/announcement", announcementRoutes);
app.use("/user", userRoutes);

export default app;
