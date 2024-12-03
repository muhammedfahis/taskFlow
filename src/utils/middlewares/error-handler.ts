import { Request,Response,NextFunction } from "express";
import  CustomErrors  from "../errors/custom-error";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) => {
    if(err instanceof CustomErrors) {
        return res.status(err.statusCode).send({errors:err.serializeErrors()});
    }
    console.error('Unhandled Error',err);
    res.status(400).send({
        errors:[{message:'Something went wrong'}]
    });
}