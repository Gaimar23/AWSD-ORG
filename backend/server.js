import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";

// App config
const app = express();
const port = 5000 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// DB Connexion
connectDB();

// Api endpoints
app.use("/api/user", userRouter);
//
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
