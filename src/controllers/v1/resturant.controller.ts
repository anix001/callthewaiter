import { Response, Request } from 'express';
import { PrismaClient } from "@prisma/client";

import { handleError } from '../../utils/handleError';
import { AuthRequest } from '../../middleware/auth';

const prisma = new PrismaClient();

async function createResturant(req:AuthRequest, res:Response){
  const user = req?.user as Record<string, unknown>;
  const {name} = req.body;
    try{
      await prisma.resturant.create({
        data:{
          name: name,
          user:{
            connect:{id: user.id as string}
          }
        }
      });
      res.status(201).json({ message: 'Restaurant created successfully' });
    }catch(err:unknown){
        handleError(err, "Error creating Resturant");
    };
};


async function deleteResturant(req:Request, res: Response){
  const {id} = req.body;
  try{
   await prisma.resturant.delete({
    where:{
      id:id
    }
   });

   res.status(200).json({message: 'Resturant record deleted successfully'});
  }catch(err:unknown){
      handleError(err, "Error Deleting Resturant");
  };
};

export {createResturant, deleteResturant};