import { Router, Request, Response } from "express";
import { UserController } from "../../controllers/v1";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  UserController.createUser(req, res);
});

router.post("/login", (req: Request, res: Response) => {
  UserController.login(req, res);
});

export default router;
