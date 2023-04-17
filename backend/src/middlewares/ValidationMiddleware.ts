import { type AnyZodObject, ZodError } from "zod";
import { type Response, type NextFunction, type Request } from "express";
import { RequestValidationError } from "../utils/errors";

export const validationMiddleware =
  <T>(schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await schema.parseAsync(body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        const errors = Object.keys(fieldErrors).map((field) => {
          return {
            message: fieldErrors[field]?.join() || "Invalid value",
            field: field,
          };
        });
        next(new RequestValidationError(errors));
        return;
      }
      next(err);
    }
  };
