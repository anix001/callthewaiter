import { Router, Request, Response } from "express";
import { createResturant } from "../../controllers/v1/resturant.controller";

const router = Router();

router.post("/",(req: Request, res:Response)=>{
    createResturant(req, res);
});

export default router;