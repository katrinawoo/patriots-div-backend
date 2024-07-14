import express from 'express';
import db from '../server.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const positions = await db('open_positions').select('*');
  res.json(positions);
});

router.get('/:id', async (req, res) => {
  const position = await db('open_positions').where('id', req.params.id).first();
  if (position) {
    res.json(position);
  } else {
    res.status(404).json({ message: "Position not found" });
  }
});

export default router;
