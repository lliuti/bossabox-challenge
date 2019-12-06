import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // Verify data format
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res
        .status(400)
        .json({ error: 'Invalid or insufficient information' });

    const { email } = req.body;

    // Looks for an user with sent email
    const userExists = await User.findOne({
      where: { email },
    });

    // If there's an user with that email, it throws an error
    if (userExists)
      return res.status(400).json({
        error: 'This email already belongs to an existing user',
      });

    // If it passes through all validations, the user is created
    const user = await User.create(req.body);

    // This forces server to not respond with all saved data
    // such as password_hash, created & updated_at
    const { id, name } = user;
    return res.status(201).json({ id, name, email });
  }
}

export default new UserController();
