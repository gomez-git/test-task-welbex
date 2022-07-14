import * as NotesDAO from '../dao/notes.js';

export const create = async (req, res) => {
  try {
    const note = await NotesDAO.create(req.body, res.locals.user);

    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const readAll = async (_req, res) => {
  try {
    const notes = await NotesDAO.readAll(res.locals.user);

    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const read = async (req, res) => {
  try {
    const note = await NotesDAO.read(req.params, res.locals.user);

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    await NotesDAO.update(req, res.locals.user);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await NotesDAO.deleteNote(req.params, res.locals.user);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
