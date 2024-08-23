import Jwt from "jsonwebtoken";
import config from "./configuration.utils";

export const generateAccessToken = (user:object)=> {
   return Jwt.sign(user, config.accessTokenSecret, {expiresIn: '1d'});
};