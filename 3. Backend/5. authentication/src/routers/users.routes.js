import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.findUserID);
router.get("/:id/posts", userController.findUserPost);

router.post("/register", userController.register);
router.post("/login", userController.login);
export default router;