const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const housingRoutes = require('./routes/housingRoutes');
const userRoutes = require('./routes/userRoutes');

DB_URL = 'mongodb://localhost:27017';

const mongoose = require('mongoose');

mongoose.connect(DB_URL);
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('Connected to MongoDB');
});

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/housing', housingRoutes);
app.use('/api/users', userRoutes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});