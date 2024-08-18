import { Router, Request, Response } from "express";
import { createUser } from "../../controllers/user.controller";

const router = Router();

router.post("/",(req:Request, res:Response)=>{
    createUser();
});

export default router;