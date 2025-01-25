const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express();

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
