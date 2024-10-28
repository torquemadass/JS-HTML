import express from "express";
import { commentController } from "../controllers/comment.controller.js"
const router = express.Router();

// Comment
router.post("/comments", commentController.addComment);
router.get("/comments", commentController.getComment);

export default router;