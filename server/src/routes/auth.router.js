import { Router } from "express";
import authCtr from '../controllers/auth.controller.js';
import { registerSchema, loginSchema } from "../validators/auth.validator.schema.js";
import authValidator from "../middlewares/authValidator.js";

let router = Router();

router.post('/register', authValidator(registerSchema), authCtr.register);
router.post('/login', authValidator(loginSchema), authCtr.login);
router.post('/logout', authCtr.logout)

export default router