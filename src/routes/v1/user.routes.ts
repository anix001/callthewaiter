import { Router, Request, Response } from "express";
import { createUser, login } from "../../controllers/v1/user.controller";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  createUser(req, res);
});

router.post("/login", (req: Request, res: Response) => {
  login(req, res);
});

export default router;
