const path = require('path');
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

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Ticket System' })
  });
}
app.use('/api/users', require('./routes/userRoutes'));

app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);