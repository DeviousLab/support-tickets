const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);