import {Request, Response, NextFunction} from "express";
import fs from 'fs';
import path from 'path';

export const logger =(req:Request, res:Response, next:NextFunction):void=>{
   const start = Date.now();
   
   res.on('finish', ()=>{
     const duration = Date.now() - start;
     const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode}-${duration}ms\n`;
    
     //define the log file path relative to this file
     const logFilePath = path.join(__dirname, '../logger/logger.txt');
     
     //Ensure the directory exists, if not then creates the directory
     fs.mkdirSync(path.dirname(logFilePath), {recursive:true});

     //Append the log message to the file
     fs.appendFile(logFilePath, logMessage,(err)=>{
        if(err){
            console.error("Failed to write to log file:", err.message);
        }
     });
     //optionally log to console as well
     console.log(logMessage);
   });
   next();
}