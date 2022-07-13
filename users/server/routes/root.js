import { Router } from 'express';
import * as RootController from '../controllers/root.js';

const router = new Router();

router.post('/registration', RootController.registration);
router.post('/login', RootController.login);

export default router;
