import express from "express";
import { addTwitterUsername } from "../controllers/userController";

const router = express.Router();

router.post("/add-twitter", addTwitterUsername, (req, res) => {
  res.send("User added successfully");
});

export default router;
