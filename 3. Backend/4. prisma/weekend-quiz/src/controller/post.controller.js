import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostController {
  addPost = async (req, res) => {
    try {
      const { title, content, authorId } = req.body;
      const addpost = await prisma.post.create({
        data: { title, content, authorId },
      });
      res.send(addpost);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed To Add Post");
    }
  };

  getPost = async (req, res) => {
    try {
      const post = await prisma.post.findMany();
      res.send(post);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to get Post");
    }
  };

  findPostID = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUnique({
        where: { id },
        include: { author: true, comments: true },
      });
      if (!post) return res.status(500).send("Post Not Found");
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to Find Post By ID");
    }
  };

  updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const updatePost = await prisma.post.update({
        where: { id },
        data: { title, content, updated_at: new Date() },
      });
      res.send(updatePost);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to Update Post");
    }
  };

  deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const deletePost = await prisma.post.delete({ where: { id } });
      res.send(deletePost);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to Delete Post");
    }
  };
}

export const postController = new PostController();
