import jwt  from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authenctication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) throw { name: "InvalidToken", message: "Token not found" };
        const payload = jwt.verify(access_token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({ where: { id: payload.id } });
        req.user = { id: user.id, email: user.email };
        next();
        
        next();
    } catch (error) {
        next(error);
    }
}