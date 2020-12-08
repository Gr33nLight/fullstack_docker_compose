import express from 'express';
import { AuthController } from '../controllers/auth.js';
import { check } from 'express-validator';
import auth from '../middleware/auth.js';

const router = express.Router();

/**
 * @route GET /api/auth
 * @desc Retrieve current logged in user
 * @access Private
 */
router.get('/', auth, AuthController.current_user);

/**
 * @route POST api/auth
 * @desc Auth user & get token
 * @access Public
 */
router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  AuthController.auth_user
);

export default router;
