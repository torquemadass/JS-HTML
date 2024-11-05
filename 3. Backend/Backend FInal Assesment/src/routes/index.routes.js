import express from "express";
import userRoutes from "./user.routes.js";
import roleRoutes from "./role.routes.js";
import profileRoutes from "./profile.routes.js";
import { errorHandler } from "../middlewares/errorHandler.js";

const router = express.Router();

router.get("/", req, res, next => {
    res.send("Hello There");

});

router.use("/users", userRoutes);
router.use("/profile", profileRoutes);
router.use("/role", roleRoutes);

router.use(errorHandler);

export default router;