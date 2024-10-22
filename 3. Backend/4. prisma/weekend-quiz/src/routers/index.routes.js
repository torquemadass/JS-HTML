import express from "express";
import { userController } from "../controller/user.controller.js";
import { postController } from "../controller/post.controller.js";
import { commentController } from "../controller/comment.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello There");
});

// User
router.post("/users", userController.addUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.findUserID);
router.get("/users/:id/posts", userController.findUserPost);

// Post
router.post("/posts", postController.addPost);
router.get("/posts", postController.getPost);
router.get("/posts/:id", postController.findPostID);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

// Comment
router.post("/comments", commentController.addComment);
router.get("/comments", commentController.getComment);

export default router;
