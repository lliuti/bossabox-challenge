import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Tries to find an User with passed email
    const user = await User.findOne({
      where: { email },
    });

    if (!user) return res.json({ error: 'User not found' });

    const { id, name } = user;

    // Verifies password
    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Invalid password' });

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
