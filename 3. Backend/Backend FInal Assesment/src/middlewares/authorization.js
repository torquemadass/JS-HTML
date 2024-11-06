import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authorization = async (req, res, next) => {
    try {
        const { id: userId } = req.user;
        const { id: resourceId } = req.params;
        const resourceType = req.baseUrl.split("/")[1];
        
        let hasAccess = false;
        switch (resourceType) {
            case "profiles":
                const profile = await prisma.profile.findUnique({ where: { id: parseInt(resourceId) } });
                if (profile.user_id === userId) hasAccess = true;
                break;
        
            case "users":
                const user = await prisma.user.findUnique({ where: { id: parseInt(resourceId) } });
                if (user.id === userId) hasAccess = true; 
                break;
        }
        if (!hasAccess) throw {name: "Unauthorized", message: "Unauthorized access"};
        next();
    } catch (error) {
        next(error);
    }
}