import Jwt from "jsonwebtoken";

export const generateAccessToken = (user:object)=> {
   return Jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn: '1d'});
};