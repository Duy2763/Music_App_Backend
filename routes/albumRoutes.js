const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// Route để lấy tất cả các album
router.get('/albums', async (req, res) => {
  try {
    const albums = await Album.find().populate('artist');
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
