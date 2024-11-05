import express from "express";
import { profileController } from "../controllers/profile.controller";

const router = express.Router();

router.post("/", profileController.postProfile);
router.get("/", profileController.getProfile);
router.get("/:id", profileController.getProfileID);
router.put("/:id", profileController.updateProfileID);
router.delete("/:id", profileController.deleteProfileID);


export default router;