const express = require('express');
const housingRoutes = require('./routes/housingRoutes');
const app = express();

app.use(express.json()); // Middleware for parsing JSON
app.use('/api/housing', housingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
