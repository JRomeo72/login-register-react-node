import { Router } from "express";
import userCtr from "../controllers/user.controller.js";
import authRequired from "../middlewares/tokenValidator.js";

let router = Router();

router.get('/profile', authRequired, userCtr.profile)

export default router