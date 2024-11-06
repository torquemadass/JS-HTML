import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hashedPassword = "$2b$10$CC2zujnUNln94SkJfD6JwulHIKh.H7HdkkXg6tgrTqWaSC2SyoqNq";
const access_token = {
    'user-agent': 'PostmanRuntime/7.42.0',
    accept: '*/*',
    'postman-token': '0a019e41-00e2-4f0f-a4a9-b1a7a8c756e9',
    host: 'localhost:3000',
    'accept-encoding': 'gzip, deflate, br',
    connection: 'keep-alive',
    'content-type': 'application/x-www-form-urlencoded',
    'content-length': '47'
  }

/*
"id": 8,
    "email": "user@mail.com",
    "password": "$2b$10$5qnUvDiwlD.MxvucVxV6/ep70lwvOhA8sZLmRxvsNYreCUjk394WK",
    "created_at": "2024-11-06T02:55:55.048Z",
    "updated_at": "2024-11-06T02:55:55.048Z",
    "role_id": 3
    */

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}