const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.get('/products', async (req, res) => {
    const response = await axios.get('http://localhost:4001/products');
    res.json(response.data);
});

app.get('/users', async (req, res) => {
    const response = await axios.get('http://localhost:4002/users');
    res.json(response.data);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
