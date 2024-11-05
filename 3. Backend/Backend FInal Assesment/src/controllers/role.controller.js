import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RoleController {
    async postRole(req, res, next) {
        try {
            const { name } = req.body;
            const role = await prisma.role.create({ data: { name } });
            res.json(role);
        } catch (error) {
            next(error);
        }
    };
    async getRoles(req, res, next) {
        try {
            const roles = await prisma.role.findMany();
            res.json(roles);
        } catch (error) {
            next(error);
        }
    };

    async getRolesID(req, res, next) {
        try {
            const { id } = req.params;
            const roleId = await prisma.role.findUnique({ where: { id: parseInt(id) } });
            if (!roleId) return res.status(404).json({ message: "Role not found" });
            res.json(roleId);
        } catch (error) {
            next(error);
        }
    };

    async updateRoleID(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const updateRole = await prisma.role.update({
                where: { id: parseInt(id) },
                data: { name, updated_at: new Date() },
            });
            res.json(updateRole);
        } catch (error) {
            next(error);
        }
    };

    async deleteRole(req, res, next) {
        try {
            const { id } = req.params;
            const deleteRole = await prisma.role.delete({ where: { id: parseInt(id) }});
            res.json(deleteRole)
        } catch (error) {
            next(error);
        }
    }
}

export const rolecontroller = new RoleController();