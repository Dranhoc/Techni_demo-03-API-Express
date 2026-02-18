import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = Router();

// http://localhost:8080/user
userRouter.get('/', userController.getAll);

export default userRouter;
