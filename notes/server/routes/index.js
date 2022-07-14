import { Router } from 'express';
import notesRouter from './notes.js';
import authorization from '../middlewares/authorization.js';

const router = new Router();

router.use('/notes', authorization, notesRouter);
router.use('*', (_req, res) => res.sendStatus(404));

export default router;
