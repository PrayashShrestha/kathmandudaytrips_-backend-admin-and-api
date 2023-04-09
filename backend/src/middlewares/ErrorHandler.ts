import { NextFunction, Response } from "express";
import { Request } from "express";
import { CustomError } from "../utils/errors/index";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeError() });
  }
  return res.status(500).json({
    errors: [{ message: "Internal Server Error" }],
  });
};
