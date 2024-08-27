import { Response, Request } from 'express';
import { PrismaClient } from "@prisma/client";

import { HashUtils, handleError, generateAccessToken } from '../../utils';

const prisma  = new PrismaClient();

//[To create user]
async function createUser(req:Request, res:Response){
     const {email, password, username}= req.body;
     const hashedPassword = await HashUtils.hashPassword(password);

     try{
        await prisma.user.create({
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
    const user = await prisma.user.findUnique({where:{email}});

    if(!user) throw new Error("User not found");
    
    const isValidPassword = await HashUtils.verifyPassword(password, user.password);

    if(!isValidPassword) throw new Error("Invalid Password");

    const token = generateAccessToken(user);
    const userData = {
      id: user.id, 
      email:user.email,
      username: user.username
    };

    return res.status(200).json({
        "message": "Login Successfully",
        "data": {
          "user":userData,
          "accessToken": token
        }
    });
  }catch (err: unknown) {
    handleError(err, "Error login to the system");
  };
};

export {createUser, login};