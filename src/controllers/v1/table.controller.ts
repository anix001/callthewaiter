import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { handleError } from '../../utils/handleError';

const prisma = new PrismaClient();

async function createTable(req:Request, res:Response){
  const {resturantId, tableNo} = req.body;
  try{
    await prisma.table.create({
        data:{
            tableNo: tableNo,
            resturant:{
                connect:{id: resturantId}
            }
        }
    });
    res.status(201).json({message: "Table Record created successfully"})
  }catch(err:unknown){
    handleError(err, "Error Creating Tables");
  }
};

async function deleteTable(req:Request, res:Response){
    const {id} = req.body;
    try{
     await prisma.table.delete({
        where:{
            id:id
        }
     });
     res.status(200).json({message: "Table record deleted successfully"});
    }catch(err:unknown){
      handleError(err, "Error Deleting Tables");
    }
};

export {createTable, deleteTable};