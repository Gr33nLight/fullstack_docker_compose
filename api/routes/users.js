import express from 'express';
import { UsersController } from '../controllers/users.js';
import { check } from 'express-validator';

const router = express.Router();

/**
 * @route POST /api/users
 * @desc Register a user
 * @access Public
 */
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Enter a password with 6 or more characters').isLength({
      min: 6,
    }),
  ],
  UsersController.register_user
);

export default router;
