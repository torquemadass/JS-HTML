import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
    addComment = async (req, res) => {
        try {
            const { content, postId, userId } = req.body;
            const addcomment = await prisma.comment.create({
                data: { content, postId, userId },
            })
            res.send(addcomment);
        } catch (error) {
            console.log(error);
            res.status(500).send("Failed to Add Comment");
        }
    };

    getComment = async (req, res) => {
        try {
            const comment = await prisma.comment.findMany();
            res.send(comment);
        } catch (error) {
            console.log(error);
            res.status(500).send("Failed to Get Comment");
        }
    }
}

export const commentController = new CommentController();