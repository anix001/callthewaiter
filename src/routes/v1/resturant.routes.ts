import { Router, Request, Response } from "express";
import { RestaurantController } from "../../controllers/v1";

const router = Router();

router.post("/",(req: Request, res:Response)=>{
    RestaurantController.createResturant(req, res);
});

router.delete("/",(req:Request, res: Response)=>{
    RestaurantController.deleteResturant(req, res);
});

export default router;