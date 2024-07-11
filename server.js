import express from "express";
import cors from "cors";
// import "dotenv/config";
import dotenv from 'dotenv';
// import whRoutes from "./routes/warehouses.js";
// import invRoutes from "./routes/inventory.js";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: ['application/json'] }));

const port = process.env.PORT || 8080;

// app.use("/api/warehouses", whRoutes);
// app.use("/api/inventories", invRoutes);

//medium
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
