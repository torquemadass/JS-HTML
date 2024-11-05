import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserID);
router.put("/id", userController.updateUser);
router.delete(":id", userController.deletedUser);


router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;