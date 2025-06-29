const express = require('express');
const router = express.Router();
const Link = require('../models/Link');

router.post('/add', async (req, res) => {
    const { category, name, url } = req.body;
    try {
        const newLink = new Link({ category, name, url });
        await newLink.save();
        res.status(201).json(newLink);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.json(links);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
