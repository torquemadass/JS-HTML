import express from "express";
import { rolecontroller } from "../controllers/role.controller.js";

const router = express.Router();

router.post("/", rolecontroller.postRole);
router.get("/", rolecontroller.getRoles);
router.get("/:id", rolecontroller.getRolesID);
router.put("/:id", rolecontroller.updateRoleID);
router.delete("/:id", rolecontroller.deleteRole);

export default router;