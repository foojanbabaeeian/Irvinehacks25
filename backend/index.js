const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
