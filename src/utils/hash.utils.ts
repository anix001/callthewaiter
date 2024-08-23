// import crypto from "crypto";

// export const hashPassword = (password:string):{salt:string, hash:string}=>{
// //generate a random salt
// const salt = crypto.randomBytes(16).toString('hex');

// //hash the password with the salt
// const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

// return  {salt, hash};
// };

// export const verifyPassword =(password:string, salt:string, hash:string): boolean =>{
//     //hash the password with the provided salt
//     const hashVerify = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

//     //compare the hashed password with the provided hash
//     return hash === hashVerify;
// }

import bcrypt from "bcrypt";
import config from "./configuration.utils";
import { handleError } from "./handleError.utils";

//[defining the no. of salt round(the cost factor)]
const saltRounds = config.saltRound;

const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err: unknown) {
    handleError(err, "Error creating hashed password");
  }
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<Boolean> => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (err: unknown) {
    handleError(err, "Error verifying the password");
  }
};

export { hashPassword, verifyPassword };
