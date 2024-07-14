import express from 'express';
import db from '../server.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const team = await db('team_bios').select('*');
  res.json(team);
});

export default router;
