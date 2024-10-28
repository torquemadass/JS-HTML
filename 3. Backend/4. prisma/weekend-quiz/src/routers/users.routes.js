import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/users", userController.addUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.findUserID);
router.get("/users/:id/posts", userController.findUserPost);

export default router;