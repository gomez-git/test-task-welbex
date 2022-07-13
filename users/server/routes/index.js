import { Router } from 'express';
import rootRouter from './root.js';
import usersRouter from './users.js';
import authorization from '../middlewares/authorization.js';

const router = new Router();

router.use('/users', authorization, usersRouter);
router.use('/', rootRouter);
router.use('*', (_req, res) => res.sendStatus(404));

export default router;
