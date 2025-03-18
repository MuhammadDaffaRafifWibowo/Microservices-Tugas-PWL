const express = require('express');
const fs = require('fs');
const app = express();

app.get('/products', (req, res) => {
    const data = JSON.parse(fs.readFileSync('../../database/products.json'));
    res.json(data);
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Products service running on port ${PORT}`));
