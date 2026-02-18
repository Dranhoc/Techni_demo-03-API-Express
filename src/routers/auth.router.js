import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { bodyValidator } from '../middlewares/body-validator.middleware.js';
import { registerValidator } from '../validators/auth.validator.js';

const authRouter = Router();

// http://localhost:8080/auth/register
authRouter.post('/register', bodyValidator(registerValidator), authController.register);

export default authRouter;
