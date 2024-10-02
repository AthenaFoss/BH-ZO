import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/userRoute";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", router);

export default app;
