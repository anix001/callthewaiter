import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import config from "../utils/configuration";

export interface AuthRequest extends Request {
  user?: JwtPayload | Object;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

    jwt.verify(
      token,
      config.accessTokenSecret,
      (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
      }
    );
};
