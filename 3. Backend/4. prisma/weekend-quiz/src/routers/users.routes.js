import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.findUserID);
router.get("/:id/posts", userController.findUserPost);

export default router;