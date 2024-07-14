import cors from "cors";
import dotenv from 'dotenv';
import knex from "knex";
import knexConfig from './knexfile.js'
import express from "express";
import contactRoutes from './routes/contact_us.js';
import jobApplicationRoutes from './routes/job_applications.js';
import teamBiosRoutes from './routes/team_bios.js';
import openPositionsRoutes from './routes/open_positions';
import teamBios from "./seeds/01_team_bios.js";
import openPositions from "./seeds/02_open_positions.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const db = knex(knexConfig);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));


// Routes
// app.get('/api/team', async (req, res) => {
//   const team = await db('team_bios').select('*');
//   res.json(team);
// });

// app.get('/api/positions', async (req, res) => {
//   const positions = await db('open_positions').select('*');
//   res.json(positions);
// });

// app.get('/api/positions/:id', async (req, res) => {
//   const position = await db('open_positions').where('id', req.params.id).first();
//   if (position) {
//     res.json(position);
//   } else {
//     res.status(404).json({ message: "Position not found" });
//   }
// });
app.use('/api/team', teamBiosRoutes);
app.use('/api/positions', openPositionsRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api', contactRoutes);


//medium
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default db;
