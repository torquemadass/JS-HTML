import "dotenv/config";
import jwt from "jsonwebtoken";



const SECRET_KEY = process.env.SECRET_KEY;

export const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};