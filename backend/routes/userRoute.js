import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  singleUser,
  updateUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";
import multer from "multer";

const userRouter = express.Router();

// Storing images
const Storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    //
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const uploadFile = multer({ storage: Storage });

//
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/get", authMiddleware, getUser);
userRouter.post("/single/:userId", singleUser);
userRouter.post("/update/:id", uploadFile.single("image"), updateUser);

export default userRouter;
