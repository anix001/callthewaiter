import { Router, Request, Response } from "express";
import { TableController } from "../../controllers/v1";

const router = Router();

router.post("/", (req:Request, res:Response)=>{
  TableController.createTable(req, res);
});

router.delete("/", (req:Request, res:Response)=>{
   TableController.deleteTable(req, res);
});

export default router;