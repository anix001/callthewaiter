import Jwt from "jsonwebtoken";
import config from "./configuration";

export const generateAccessToken = (user:object)=> {
   return Jwt.sign(user, config.accessTokenSecret, {expiresIn: '1d'});
};