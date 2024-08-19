// import crypto from "crypto";
import { Response, Request } from 'express';
import { PrismaClient, Prisma } from "@prisma/client";

import { hashPassword } from './../../utils/hash';

const prisma  = new PrismaClient();

async function createUser(req:Request, res:Response){
     const {email, password, username}= req.body;
     const {salt,hash} = hashPassword(password);
    //  const uuid = crypto.randomUUID();
     try{
        const user  = await prisma.users.create({
          data: { 
            email,
            password: hash,
            username,
            salt
            },
        });

        return  res.status(201).json({
            "message": "User created successfully !",
            "data": user
        });
    }catch(err){
        res.status(500).json({
            "error": err
        });
    };
};

export {createUser};