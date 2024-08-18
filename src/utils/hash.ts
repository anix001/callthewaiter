import crypto from "crypto";

export const hashPassword = (password:string):{salt:string, hash:string}=>{
//generate a random salt
const salt = crypto.randomBytes(16).toString('hex');

//hash the password with the salt
const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

return  {salt, hash};
};

export const verifyPassword =(password:string, salt:string, hash:string): boolean =>{
    //hash the password with the provided salt
    const hashVerify = crypto.pbkdf2Sync(password, salt, 1000,24, 'sha512').toString('hex');

    //compare the hashed password with the provided hash
    return hash === hashVerify;
}