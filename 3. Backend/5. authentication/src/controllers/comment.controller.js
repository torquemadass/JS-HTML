import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
    addComment = async (req, res, next) => {
        try {
            const { content, postId, userId } = req.body;
            const addcomment = await prisma.comment.create({
                data: { content, postId, userId },
            })
            res.send(addcomment);
        } catch (error) {
            next(error);
        }
    };

    getComment = async (req, res, next) => {
        try {
            const comment = await prisma.comment.findMany();
            res.send(comment);
        } catch (error) {
            next(error);
        }
    }
}

export const commentController = new CommentController();