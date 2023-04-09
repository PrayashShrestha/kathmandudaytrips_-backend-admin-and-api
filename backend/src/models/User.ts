import * as z from "zod";

export const userSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must be of 3 characters" })
    .max(255),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be valid",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be of length 8",
    })
    .min(8),
});

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createAt: Date;
  updateAt: Date;
}
