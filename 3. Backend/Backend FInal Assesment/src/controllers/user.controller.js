import { PrismaClient } from "@prisma/client";
import { comparePassword, hashPassword } from "../middlewares/bcrypt.js";
// import { generateAccessToken } from "../middlewares/jwt.js";

const prisma = new PrismaClient();

class UserController {
    async register(req, res, next) {
        try {
            const { email, password, role_id } = req.body;
            // const hashedPassword = await bcrypt.hash(password, 10); (without middleware)
            const hashedPassword = await hashPassword(password);
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
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user || !(await comparePassword(password, user.password))) return res.status(201).json({ message: "Invalid Credentials" });
            const token = jwt.sign({ id: user.id, role_id: user.role_id }, process.env.JWT_SECRET);
            res.send({ token });
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