import { Router } from 'express';
import authRouter from './auth.router.js';

const router = Router();

// TODO routing des features
router.use('/auth', authRouter);

export default router;
