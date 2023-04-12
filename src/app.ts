import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { handleErrors } from "./errors";
import announcementRoutes from "./routes/announcement.route";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(handleErrors);

app.use("/announcement", announcementRoutes);

export default app;
