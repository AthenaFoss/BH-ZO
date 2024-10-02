import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/userRoute";
import leaderBoardRouter from "./routes/scoreRoute";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", router);
app.use("/api", leaderBoardRouter);

export default app;
