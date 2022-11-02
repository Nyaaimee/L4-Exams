import express from "express";
import userController from "../controller/users.controller.js"

const userRouter = express.Router()

// get users endpoint
userRouter.get("/",userController.getUsers);

// add users
userRouter.post("/add",userController.addUser);

export default userRouter;