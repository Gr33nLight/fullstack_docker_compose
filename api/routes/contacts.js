import express from 'express';
import { ContactsController } from '../controllers/contacts.js';
import auth from '../middleware/auth.js';
import { check } from 'express-validator';

const router = express.Router();

/**
 * @route GET /api/contacts
 * @desc Retrieve all contacts for a logged in user
 * @access Private
 */
router.get('/', auth, ContactsController.get_contacts);

/**
 * @route POST /api/contacts
 * @desc Create new contact
 * @access Private
 */
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Email is required').not().isEmpty(),
    ],
  ],
  ContactsController.create_contact
);

/**
 * @route PUT /api/contacts
 * @desc Update a contact
 * @access Private
 */
router.put('/:id', auth, ContactsController.update_contact);

/**
 * @route PUT /api/contacts
 * @desc Delete a contact
 * @access Private
 */
router.delete('/:id', auth, ContactsController.delete_contact);

export default router;
