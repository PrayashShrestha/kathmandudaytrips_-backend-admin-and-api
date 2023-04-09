import { CustomError } from "./CustomError";

export class UnauthorizedError extends CustomError {
  statusCode = 401;

  constructor(public message: string = "Not Authorized") {
    super(message);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
