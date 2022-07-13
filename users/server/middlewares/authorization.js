import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    res.locals.user = { id };
    next();
  } catch (err) {
    res.sendStatus(401);
  }
};
