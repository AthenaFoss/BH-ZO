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

export const updateScore = async (
  twitterUsername: string,
  newScore: number
) => {
  try {
    const user = await User.findOneAndUpdate(
      { twitterUsername: twitterUsername },
      { $set: { score: newScore } },
      { new: true }
    ).select("twitterUsername score -_id");

    console.log("User updated:", newScore);

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error updating score:", error);
    throw error;
  }
};

export default getAllScores;
