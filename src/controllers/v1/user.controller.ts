import { Response, Request } from 'express';
import { PrismaClient } from "@prisma/client";

import { hashPassword, verifyPassword } from './../../utils/hash';
import { handleError } from '../../utils/handleError';

const prisma  = new PrismaClient();

//[To create user]
async function createUser(req:Request, res:Response){
     const {email, password, username}= req.body;
     const hashedPassword = await hashPassword(password);

     try{
        const user  = await prisma.users.create({
          data: { 
            email,
            password: hashedPassword,
            username,
            },
        });

        return res.status(201).json({
            "message": "User created successfully !"
        });
    }catch (err: unknown) {
      handleError(err, "Error creating user !!");
    };
};

//[To Login in the system]
async function login(req: Request, res:Response){
  const {email, password} = req.body;
  try{
    const user = await prisma.users.findUnique({where:{email}});

    if(!user) throw new Error("User not found");
    
    const isValidPassword = await verifyPassword(password, user.password);

    if(!isValidPassword) throw new Error("Invalid Password");

    return res.status(200).json({
        "message": "Login Successfully"
    });
  }catch (err: unknown) {
    handleError(err, "Error login to the system");
  };
};

export {createUser, login};