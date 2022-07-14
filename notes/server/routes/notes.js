import { Router } from 'express';
import * as notesController from '../controllers/notes.js';

const router = new Router();

router.route('/:id(\\d+)')
  .get(notesController.read)
  .patch(notesController.update)
  .delete(notesController.deleteNote);
router.route('/')
  .get(notesController.readAll)
  .post(notesController.create);

export default router;
