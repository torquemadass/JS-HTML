import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  addUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username) return res.status(500).send("username is missing");
    if (!email) return res.status(500).send("email is missing");
    if (!password) return res.status(500).send("password is missing");

    try {
      const newUser = await prisma.user.create({
        data: { username, email, password }
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  getUsers = async (req, res) => {
    try {
      const getUser = await prisma.user.findMany();
      res.send(getUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  findUserID = async (req, res) => {
    try {
      const { id } = req.params;

      const userFound = await prisma.user.findUnique({ where: { id }});
      if (!userFound) return res.status(500).send("User not Found");

      res.send(userFound);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  findUserPost = async (req, res) => {
    try {
        const { id } = req.params;
        const userPost = await prisma.post.findMany({ where: { authorId: id }});
        res.status(userPost);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
  }
}

export const userController = new UserController();
