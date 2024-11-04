import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hashedPassword = "$2b$10$KcWukIjvKxDOS2JN1Fe6lO8dEIu5.VOscVrbZ7KYyUYNOxKRnjD0i"

 export const hashPassword = async (password,) => {
    return await bcrypt.hash(password, saltRounds);
 }

 export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
 }

// hashPassword(myPlaintextPassword).then(response => console.log(response));
// comparePassword(myPlaintextPassword, hashedPassword).then(response => console.log(response));
 