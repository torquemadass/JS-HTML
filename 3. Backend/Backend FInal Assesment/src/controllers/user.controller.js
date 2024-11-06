import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class UserController {
    async register(req, res, next) {
        try {
            const { email, password, role_id } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); //bcrypt(without middleware)
            console.log(hashedPassword);
            
            // const hashedPassword = await hashPassword(password);
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    role_id: parseInt(role_id)
                }
            })
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    };

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            let user;
            user = await prisma.user.findUnique({ where: { email } });
            if (!email) throw new Error("Email not found");
            const validatedUser = await bcrypt.compare(password, user.password);
            if (!validatedUser) throw new Error("Invalid password");

            const payload = {
                id: user.id,
                email: user.email,
                role_id: user.role_id 
            };
            const access_token = jwt.sign(payload, process.env.JWT_SECRET); 
            res.status(200).json({ access_token });
        } catch (error) {
            next(error);
        }
    };

    async getUsers(req, res, next) {
        try {
            const users = await prisma.user.findMany();
            res.send(users);
        } catch (error) {
            next(error);
        }
    };

    async getUserID(req, res, next) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(req.params.id) },
            });
            if (!user) return res.status(404).json({ message: "User Not Found" });
            res.send(user);
        } catch (error) {
            next(error);
        }
    };

    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const { email, password, role_id } = req.body;
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(id) },
                data: {
                    email,
                    password,
                    role_id: parseInt(role_id)
                }
            });
            res.send(updatedUser);
        } catch (error) {
            next(error);
        }
    };

    async deletedUser(req, res, next) {
        try {
          const { id } = req.params;
          const deletedUser = await prisma.user.delete({ where: { id: parseInt(id) } });
          res.send(deletedUser);  
        } catch (error) {
            next(error)
        }
    }
}

export const userController = new UserController();