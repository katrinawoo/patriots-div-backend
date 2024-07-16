import cors from "cors";
import dotenv from 'dotenv';
import knex from "knex";
import knexConfig from './knexfile.js'
import express from "express";
import contactRoutes from './routes/contact_us.js';
import jobApplicationRoutes from './routes/job_applications.js';
import teamBiosRoutes from './routes/team_bios.js';
import openPositionsRoutes from './routes/open_positions.js';
// import teamBios from "./seeds/01_team_bios.js";
// import openPositions from "./seeds/02_open_positions.js";


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
app.use('/api/team', teamBiosRoutes);
app.use('/api/positions', openPositionsRoutes);
app.use('/api', jobApplicationRoutes);
app.use('/api', contactRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default db;
