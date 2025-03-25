import { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const userRouter = Router();

userRouter.post("/login", login);

userRouter.post("/signup", signup);

export default userRouter;
