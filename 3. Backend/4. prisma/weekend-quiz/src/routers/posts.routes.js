import express from "express";
import { postController } from "../controllers/post.controller.js";
const router = express.Router();

router.post("/", postController.addPost);
router.get("/", postController.getPost);
router.get("/:id", postController.findPostID);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;