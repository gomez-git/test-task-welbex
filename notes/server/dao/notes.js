import models from '../models/index.js';

const { Note } = models;

export const create = ({ title, body }, { id }) => Note.create({ user_id: id, title, body });

export const readAll = ({ id }) => Note.findAll({ where: { user_id: id } });

export const read = ({ id }, { id: userId }) => Note.findOne({ where: { id, user_id: userId } });

export const update = ({ body: { title, body }, params: { id } }, { id: userId }) => (
  Note.update({ title, body }, { where: { id, user_id: userId } })
);

export const deleteNote = ({ id }, { id: userId }) => (
  Note.destroy({ where: { id, user_id: userId } })
);

export const deleteNotes = (userId) => Note.destroy({ where: { user_id: userId } });
