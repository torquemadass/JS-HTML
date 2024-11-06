import express from "express";
import { userController } from "../controllers/user.controller.js";
import { authenctication } from "../middlewares/authentication.js";
import { authorization } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserID);
router.put("/:id", authenctication, authorization, userController.updateUser);
router.delete("/:id", authenctication, authorization, userController.deletedUser);



export default router;