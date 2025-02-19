
import  CustomErrors  from "./custom-error";

export class DatabaseConnectionError extends CustomErrors  {
    statusCode = 500;
    reason = 'Error connecting to database';

    constructor() {
        super('Error connecting to database');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{message:this.reason}]
    }
}