import { Router } from "express";
import userCtr from "../controllers/user.controller.js";

const router = Router();

router.get('/user', userCtr.getUsers)

export default router