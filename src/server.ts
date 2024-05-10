import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const MONGO_DB_USER = String(process.env.MONGO_DB_USER);
const MONGO_DB_PASSWORD = String(process.env.MONGO_DB_PASSWORD);
const PORT = String(process.env.PORT) || 3333;

const MONGO_DB_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@apoiers.btleqkp.mongodb.net/?retryWrites=true&w=majority&appName=apoieRS`;

mongoose
  .connect(MONGO_DB_URL)
  .then((data) => {
    console.log("MongoDB Connection Succeeded");
  })
  .catch((err) => {
    console.log(`Error in DB connection`, err.message);
  });

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
