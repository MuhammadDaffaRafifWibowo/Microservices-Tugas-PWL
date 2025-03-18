const express = require('express');
const fs = require('fs');
const app = express();

app.get('/users', (req, res) => {
    const data = JSON.parse(fs.readFileSync('../../database/users.json'));
    res.json(data);
});

const PORT = 4002;
app.listen(PORT, () => console.log(`Users service running on port ${PORT}`));
