import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProfileController {
    async postProfile(req, res, next) {
        try {
            const { first_name, last_name, user_id } = req.body;
            const profile = await prisma.profile.create({
                data: {
                    first_name,
                    last_name,
                    user: {
                        connect: { id: parseInt(user_id) }  // Connect the profile to an existing user by user_id
                    }
                }
            });
            res.json(profile);
        } catch (error) {
            next(error);
        }
    };

    async getProfile(req, res, next) {
        try {
            const profiles = await prisma.profile.findMany();
            res.json(profiles);
        } catch (error) {
            next(error);
        }
    };

    async getProfileID(req, res, next) {
        try {
            const { id } = req.params;
            const profileId = await prisma.profile.findUnique({ where: { id: parseInt(id) }});
            res.json(profileId);
        } catch (error) {
            next(error);
        }
    };

    async updateProfileID(req, res, next) {
        try {
            const { id } = req.params;
            const { first_name, last_name } = req.body;
            const updateProfile = await prisma.profile.update({
                where: { id: parseInt(id) },
                data: { first_name, last_name, updated_at: new Date() }
            });
            res.json(updateProfile);
        } catch (error) {
            next(error);
        }
    };

    async deleteProfileID(req, res, next) {
        try {
           const { id } = req.params;
           const deleteProfile = await prisma.profile.delete({ where: { id: parseInt(id) } });
           res.json(deleteProfile); 
        } catch (error) {
            next(error);
        }
    }
}

export const profileController = new ProfileController();