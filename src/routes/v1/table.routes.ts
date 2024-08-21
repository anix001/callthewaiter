import { Router, Request, Response } from "express";
import { createTable, deleteTable } from "../../controllers/v1/table.controller";

const router = Router();

router.post("/", (req:Request, res:Response)=>{
  createTable(req, res);
});

router.delete("/", (req:Request, res:Response)=>{
   deleteTable(req, res);
});

export default router;