import express from "express";
import cors from "cors";
import pointsRouter from "./routers/pointsRouter";
import accessRouter from "./routers/accessRouter";

const app = express();
app.use(cors());
app.use(express.json());
app.use(pointsRouter);
app.use(accessRouter);

export default app;
