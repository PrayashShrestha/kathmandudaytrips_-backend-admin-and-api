import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index";

import express from "express";
import { validationMiddleware } from "../middlewares";
import { userSchema } from "../models";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", validationMiddleware(userSchema), createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
