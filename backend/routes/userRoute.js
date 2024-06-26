import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  singleUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

//
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/get", authMiddleware, getUser);
userRouter.post("/single/:userId", singleUser);

export default userRouter;
