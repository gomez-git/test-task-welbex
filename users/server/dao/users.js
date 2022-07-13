import jwt from 'jsonwebtoken';
import models from '../models/index.js';
import encrypt from '../utils/encrypt.js';

const { User } = models;

export const create = ({ email, password }) => (
  User.create({ email, password: encrypt(password) }, { returning: false })
);

export const read = ({ id }) => User.findByPk(id);

export const update = ({ email, password }, { id }) => (
  User.update({ email, password: password && encrypt(password) }, { where: { id } })
);

export const deleteUser = ({ id }) => User.destroy({ where: { id } });

export const authentication = async ({ email, password }) => {
  const user = await User.findOne({ where: { email }, rejectOnEmpty: true });
  if (user.password !== encrypt(password)) {
    throw new Error();
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '15m' });

  return token;
};
