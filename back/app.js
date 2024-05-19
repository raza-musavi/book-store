import express from "express";
import cors from "cors";
import bookRoute from "./routes/bookRoute.js";

const app = express();
app.use(express.json());

//to bypass CORS policy cross origin resource sharing
app.use(cors());

app.use("/books", bookRoute);

export default app;
