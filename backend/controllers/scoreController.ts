import User from "../models/userSchema";

const getAllScores = async () => {
  try {
    const leaderboard = await User.find()
      .sort({ score: -1 })
      .select("twitterUsername score -_id");

    return leaderboard;
  } catch (error) {
    console.error("Error fetching scores:", error);
    throw error;
  }
};

export default getAllScores;
