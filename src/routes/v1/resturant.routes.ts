import { Router, Request, Response } from "express";
import { createResturant, deleteResturant } from "../../controllers/v1/resturant.controller";

const router = Router();

router.post("/",(req: Request, res:Response)=>{
    createResturant(req, res);
});

router.delete("/",(req:Request, res: Response)=>{
    deleteResturant(req, res);
});

export default router;