import { Response, Request } from 'express';
import { PrismaClient } from "@prisma/client";

import { hashPassword, verifyPassword } from './../../utils/hash';

const prisma  = new PrismaClient();

//[To create user]
async function createUser(req:Request, res:Response){
     const {email, password, username}= req.body;
     const {salt,hash} = hashPassword(password);

     try{
        const user  = await prisma.users.create({
          data: { 
            email,
            password: hash,
            username,
            salt
            },
        });

        return res.status(201).json({
            "message": "User created successfully !",
            "data": user
        });
    }catch(err){
        res.status(500).json({
            "error": err
        });
    };
};

//[To Login in the system]
async function login(req: Request, res:Response){
  const {email, password} = req.body;
  try{
    const user = await prisma.users.findUnique({where:{email}});

    if(!user) throw new Error("User not found");
    
    const isValidPassword = verifyPassword(password, user.salt, user.password);

    if(!isValidPassword) throw new Error("Invalid Password");

    return res.status(200).json({
        "message": "Login Successfully"
    });
  }catch(err){
    res.status(500).json({
        "error": err
    });
  }
};

export {createUser, login};