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
      next(error);
    }
  };

  getPost = async (req, res) => {
    try {
      const post = await prisma.post.findMany();
      res.send(post);
    } catch (error) {
      next(error);
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
      res.send(post);
      
    } catch (error) {
      console.log(error);
      next(error);
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
      next(error);
    }
  };

  deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const deletePost = await prisma.post.delete({ where: { id } });
      res.send(deletePost);
    } catch (error) {
      next(error);
    }
  };
}

export const postController = new PostController();
