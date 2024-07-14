import express from 'express';
import knex from 'knex';
import knexConfig from '../knexfile.js';
import validator from 'validator';

const router = express.Router();
const db = knex(knexConfig);

// Route to handle contact form submissions
router.post('/contact', async (req, res) => {
  const {
    name,
    email,
    message 
    } = req.body;

    // Check for missing fields
    if (
        !name ||
        !email ||
        !message
    ) {
        return res.status(400).json({
            error:
                'All fields are required: name, email, and message.' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ 
            error: 
            'Invalid email address' });
      }

      if (!validator.isLength(name, { min: 1, max: 100 })) {
        return res.status(400).json({
            error: 
            'Name must be between 1 and 100 characters' });
      }
    
      if (!validator.isLength(message, { min: 1, max: 1000 })) {
        return res.status(400).json({
            error: 'Message must be between 1 and 1000 characters' });
      }

  try {
    await db('contact_messages').insert({
      name: validator.escape(name),
      email: validator.normalizeEmail(email),
      message: validator.escape(message),
    });
    res.status(200).json({
        message:
        'Message received.' });
  } catch (error) {
    res.status(500).json({
        error: 'Error saving message.' });
  }
});

export default router;
