import express from "express";
import { profileController } from "../controllers/profile.controller.js";
import { authenctication } from "../middlewares/authentication.js";
import { authorization } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/",authenctication, authorization,  profileController.postProfile);
router.get("/", profileController.getProfile);
router.get("/:id", profileController.getProfileID);
router.put("/:id",authenctication, authorization, profileController.updateProfileID);
router.delete("/:id",authenctication, authorization, profileController.deleteProfileID);

export default router;