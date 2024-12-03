import  CustomErrors  from "./custom-error";


export class BadRequestError extends CustomErrors {
    statusCode = 400;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): { message: string; field?: string; }[] {
        return [{message:this.message}]
    }
}