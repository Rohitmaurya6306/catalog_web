const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Client login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const client = await Client.findOne({ username, password });
    if (client) {
        res.json({ message: 'Client login successful' });
    } else {
        res.status(401).json({ message: 'Invalid client credentials' });
    }
});

module.exports = router;
