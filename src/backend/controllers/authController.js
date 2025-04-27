import { findOne, create } from '../models/User';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

// Signup Controller
export async function signup(req, res) {
  const { name, email, password } = req.body;

  try {
    const userExists = await findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await hash(password, 10);

    const user = await create({
      name,
      email,
      password: hashedPassword
    });

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Login Controller
export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
