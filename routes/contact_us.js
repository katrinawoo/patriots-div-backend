import express from 'express';
import knex from 'knex';
import knexConfig from '../knexfile.js';
// import validator from 'validator';

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

  try {
    await db('contact_messages').insert({
      name,
      email,
      message,
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
