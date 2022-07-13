import { createHmac } from 'crypto';

export default (password) => {
  const hash = createHmac('sha256', process.env.SECRET_PKEY);
  hash.update(password);
  return hash.digest('hex');
};
