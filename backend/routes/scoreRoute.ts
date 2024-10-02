import express from "express";
import getAllScores from "../controllers/scoreController";

const leaderBoardRouter = express.Router();

leaderBoardRouter.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await getAllScores();
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving leaderboard", error });
  }
});

export default leaderBoardRouter;
