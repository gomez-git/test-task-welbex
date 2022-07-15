import * as UsersDAO from '../dao/users.js';
import { sendDeleteMessage } from '../kafka/producer.js';

export const read = async (_req, res) => {
  try {
    const user = await UsersDAO.read(res.locals.user);

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    await UsersDAO.update(req.body, res.locals.user);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (_req, res) => {
  try {
    await UsersDAO.deleteUser(res.locals.user);
    await sendDeleteMessage(res.locals.user);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
