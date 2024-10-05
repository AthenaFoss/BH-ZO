import express from "express";
import getAllScores, { updateScore } from "../controllers/scoreController";

const leaderBoardRouter = express.Router();

leaderBoardRouter.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await getAllScores();
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving leaderboard", error });
  }
});

leaderBoardRouter.put("/update", async (req, res) => {
  const { twitterUsername, newScore } = req.body;
  try {
    const updatedUser = await updateScore(twitterUsername, newScore);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating score", error });
  }
});

export default leaderBoardRouter;
