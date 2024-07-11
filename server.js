import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
// import whRoutes from "./routes/warehouses.js";
// import invRoutes from "./routes/inventory.js";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: ['application/json'] }));

// Serve static files
app.use('/assets', express.static('assets'));

const port = process.env.PORT || 8080;

// app.use("/api/warehouses", whRoutes);
// app.use("/api/inventories", invRoutes);

// Dummy data for team bios
let teamBios = [
  {
      id: 1,
      name: 'Roy',
      surname: 'Blackstone',
      role: 'CEO & Creative Director',
      bio: 'Roy is a product and design minded individual that brings seven years of crypto and blockchain experience, as well as a track record building web3 enabled projects.',
      image: 'http://localhost:8080/assets/roy-photo.png',
      linkedin: 'https://www.linkedin.com/in/roy-blackstone-1728b7124/'
  },
  {
      id: 2,
      name: 'Fredrik',
      surname: 'Johansson',
      role: 'Technical Producer',
      bio: 'An experienced jack of all trades that uses his background in both development and graphics to make sure all parts of the production work together smoothly.',
      image: 'http://localhost:8080/assets/fredrik-photo.png',
      linkedin: 'https://www.linkedin.com/in/fredrik-johansson-rusty-pug/'
  },
  {
    id: 3,
    name: 'Pat',
    surname: 'Palombo',
    role: 'UI & Interface Design',
    bio: 'Pat is a designer and web entrepreneur with over 18 years of experience.  He always strives to create user-centric designs with a strong focus on clean, simple and straightforward experiences for the users.',
    image: 'http://localhost:8080/assets/pat-photo.png',
    linkedin: 'https://www.linkedin.com/in/piquadro/'
  },
  {
      id: 4,
      name: 'Josef',
      surname: 'Falconshield',
      role: 'Sound Director',
      bio: 'Josef has two decades of experience writing music and designing audio for games. He is well versed and adapted in a wide array of genres and styles.',
      image: 'http://localhost:8080/assets/josef-photo.png',
      linkedin: 'https://www.linkedin.com/in/josef-falkensk%C3%B6ld-2175744b/'
  },
  // Add more bios as needed
];

// Routes
app.get('/api/team', (req, res) => {
  res.json(teamBios);
});

//medium
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
