import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { handleErrors } from "./errors";
import announcementRoutes from "./routes/announcement.route";
import userRoutes from "./routes/user.route";
import sessionRoutes from "./routes/session.route";
import profiletRoutes from "./routes/profile.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/announcement", announcementRoutes);
app.use("/user", userRoutes);
app.use("/login", sessionRoutes);
app.use("/profile", profiletRoutes);

app.use(handleErrors);

export default app;
