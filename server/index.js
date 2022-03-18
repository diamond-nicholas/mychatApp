const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send('hello world and yey my app is running live');
});

//listener
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
