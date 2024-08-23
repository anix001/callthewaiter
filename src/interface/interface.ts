import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface HttpError extends Error{
    status?:number
}

export interface AuthRequest extends Request {
    user?: JwtPayload | Object;
  }