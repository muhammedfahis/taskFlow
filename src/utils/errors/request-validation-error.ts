import { ValidationError } from "express-validator";
import  CustomErrors  from "./custom-error";



export class RequestValidationError extends CustomErrors {
    statusCode = 400;
    constructor(public errors:ValidationError[]) {
        super('RequestValidationError');    
    Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            return {
                message:err.msg,
                field:err.type
            }
        });
    }

}