import { PrismaClient, Prisma } from "@prisma/client";

const prisma  = new PrismaClient();

async function createUser(){
    const  user  = await prisma.users.create({
       data: { 
        email:'anish11@gmail.com',
        password:'test123',
        username:'anix'
        },
    });

    return user;
}

export {createUser};