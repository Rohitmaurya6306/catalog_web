const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const adminAuth = require('../middleware/auth');

// Admin login (hardcoded)
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
        res.json({ message: 'Admin login successful' });
    } else {
        res.status(401).json({ message: 'Invalid admin credentials' });
    }
});

// Create client (admin only)
router.post('/create-client', adminAuth, async (req, res) => {
    const { clientUsername, clientPassword } = req.body;
    if (!clientUsername || !clientPassword) {
        return res.status(400).json({ message: 'Client username and password required' });
    }
    try {
        const existing = await Client.findOne({ username: clientUsername });
        if (existing) {
            return res.status(409).json({ message: 'Client username already exists' });
        }
        const client = new Client({ username: clientUsername, password: clientPassword });
        await client.save();
        res.json({ message: 'Client created successfully' });
    } catch (err) {
        // Improved error reporting
        res.status(500).json({ message: 'Error creating client', error: err.message });
    }
});

module.exports = router;
