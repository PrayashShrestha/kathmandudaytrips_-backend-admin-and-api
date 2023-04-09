export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  /**     --> @ A GENERIC ERROR HANDLING METHOD TO PROVIDE A CONSISTENT WAY TO SERIALIZE THE ERRORS <--
  `
  For example, in the generic error handling middleware, we can call serializeError() on 
  the error object to get a serialized version of the error, which we can then 
  send back to the client in a consistent format, regardless of the specific type of error.
  `
 */
  abstract serializeError(): {
    message: string;
    field?: string;
  }[]; // returns an array of serialized error object
}
