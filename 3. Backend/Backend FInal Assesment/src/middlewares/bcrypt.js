import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}