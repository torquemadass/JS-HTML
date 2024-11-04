import express from "express";
import userRoutes from "../routes/user.routes.js";
import roleRoutes from "../routes/role.routes.js";
import profileRoutes from "../routes/profile.routes.js";
import { errorHandler } from "../middlewares/errorHandler.js";

const router = express.Router();

router.get("/", req, res, next => {
    res.send("Hello There");

});

router.use("/users", userRouter);
router.use("/profile", profileRouter);
router.use("/role", roleRouter);

router.use(errorHandler);

export default router;