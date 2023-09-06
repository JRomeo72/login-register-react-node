import { Router } from "express";
import userCtr from "../controllers/user.controller.js";

let router = Router();

router.get('/user', userCtr.getUsers)

export default router