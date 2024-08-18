import { Router, Request, Response } from "express";
import { createUser } from "../../controllers/v1/user.controller";

const router = Router();

router.post("/",(req:Request, res:Response)=>{
    createUser();
});

export default router;