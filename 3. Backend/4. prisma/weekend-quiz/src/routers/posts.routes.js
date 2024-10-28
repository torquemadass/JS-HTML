import express from "express";
import { postController } from "../controllers/post.controller.js";
const router = express.Router();

router.post("/posts", postController.addPost);
router.get("/posts", postController.getPost);
router.get("/posts/:id", postController.findPostID);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

export default router;