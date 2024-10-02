import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    twitterUsername: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
