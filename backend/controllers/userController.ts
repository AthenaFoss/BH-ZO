import { Request, Response } from "express";
import User from "../models/userSchema";

export const addTwitterUsername = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { twitterUsername, score } = req.body;

    if (!twitterUsername) {
      res.status(400).json({ message: "Twitter username is required" });
      return;
    }

    if (!score) {
      res.status(400).json({ message: "Score is required" });
      return;
    }

    const existingUser = await User.findOne({ twitterUsername });
    if (existingUser) {
      res.status(400).json({ message: "Twitter username already exists" });
      return;
    }

    const newUser = new User({ twitterUsername, score });
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
