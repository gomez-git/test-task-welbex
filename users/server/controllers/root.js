import * as UsersDAO from '../dao/users.js';
import { sendCreateMessage } from '../kafka/producer.js';

export const registration = async (req, res) => {
  try {
    await UsersDAO.create(req.body);
    await sendCreateMessage(req.body.email);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await UsersDAO.authentication(req.body);

    res.json(token);
  } catch (err) {
    res.status(400).end();
  }
};
