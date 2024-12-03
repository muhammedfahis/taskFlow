import CustomErrors from "./custom-error";

export class NotFoundError extends CustomErrors {
    statusCode = 404;
    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Not Found' }];
    }

}