import { Router } from "express";
import authCtr from '../controllers/auth.controller.js';

let router = Router();

router.post('/register', authCtr.register);
router.post('/login', authCtr.login);
router.post('/logout', authCtr.logout)

export default router