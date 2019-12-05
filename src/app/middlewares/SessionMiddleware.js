import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const headers = req.headers.authorization;
  if (!headers) res.json({ error: 'Token not provided' });

  const [, token] = headers.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;
    return next();
  } catch (ex) {
    return res.json({ error: 'Invalid token' });
  }
};
