import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/userRoute";
import leaderBoardRouter from "./routes/scoreRoute";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", router);
app.use("/api", leaderBoardRouter);

const url = "https://bh-zo.onrender.com";
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response: any) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error: any) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadWebsite, interval);

export default app;
