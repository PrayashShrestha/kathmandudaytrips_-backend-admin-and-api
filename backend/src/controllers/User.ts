import { Request, Response, NextFunction } from "express";

import { prisma } from "../config/index";

import { userSchema } from "../models/index";

import { BadRequestError } from "./../utils/errors/index";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) throw new BadRequestError("User not found");
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const validatedUser = userSchema.parse({ name, email, password });
    const user = await prisma.user.create({ data: validatedUser });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const validatedUser = userSchema.parse({ name, email, password });
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: validatedUser,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};
