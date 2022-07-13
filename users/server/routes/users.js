import { Router } from 'express';
import * as UsersController from '../controllers/users.js';

const router = new Router();

router.route('/')
  .get(UsersController.read)
  .patch(UsersController.update)
  .delete(UsersController.deleteUser);

export default router;
