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
    timestamps: true, // This adds createdAt and updatedAt automatically
  }
);

// Creating a model from the schema
const User = mongoose.model("User", userSchema);

// Exporting the model for use in other files
export default User;
