import { PrismaClient } from "@prisma/client";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { generateAccessToken } from "../utils/jwt.js";

const prisma = new PrismaClient();

class UserController {
  register = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;    

    if (!username && !email && !password) throw new Error("Bad Request");

    const hashedPassword = await hashPassword(password);

      const newUser = await prisma.user.create({
        data: { 
          username, 
          email, 
          password: hashedPassword 
        }
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      if (!password || (!email && !username)) throw new Error("Bad Request");
      
      const user = await prisma.user.findUnique({
        where: email ? { email } : { username }
      });

      if (!user && !username) return res.status(401).send("User Not Found.");
      
      const validatedUser = await comparePassword(password, user.password);
      if (!validatedUser) return res.status(401).send("Invalid Password");
      
      const payload = {
        id: user.id,
        email: user.email,
        username: user.username 
      }

      const access_token = generateAccessToken(payload);

      res.send({ access_token });

    } catch (error) {
      next(error);
    }
  };

  getUsers = async (req, res, next) => {
    try {
      const getUser = await prisma.user.findMany();
      res.send(getUser);
    } catch (error) {
      next(error);
    }
  };

  findUserID = async (req, res, next) => {
    try {
      const { id } = req.params;

      const userFound = await prisma.user.findUnique({ where: { id }});
      if (!userFound) return res.status(500).send("User not Found");

      res.send(userFound);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  findUserPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userPost = await prisma.post.findMany({ where: { authorId: id }});
        res.status(userPost);
    } catch (error) {
        next(error);

    }
  }
}

export const userController = new UserController();
