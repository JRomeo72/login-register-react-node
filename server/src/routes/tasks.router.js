import { Router } from 'express';
import authRequired from '../middlewares/tokenValidator.js';
import taskCtr from '../controllers/task.controller.js';

let router = Router();

router.get('/tasks', authRequired, taskCtr.getTasks)
router.get('/task/:id', authRequired, taskCtr.getTask)
router.post('/task', authRequired, taskCtr.createTask)
router.put('/task/:id', authRequired, taskCtr.updateTask)
router.delete('/task/:id', authRequired, taskCtr.deleteTask)

export default router