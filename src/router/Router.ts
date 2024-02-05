import express from "express";
import usersRouter from "../controllers/Users.controller";

const router = express.Router();

router.use('/users', usersRouter);

export default router;