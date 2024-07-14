const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require ("./config/db");
const roomRoutes = require("./routes/roomRoutes");


const port = process.env.PORT || 5000;

// CONNECT TO DATABASE
connectDB();

//SETUP MIDDLEWARES
app.use(express.json());

//SETUP ROUTES
app.use ("/api/rooms", roomRoutes)

app.listen(port, () => console.log(`listining on port ${port}`));
