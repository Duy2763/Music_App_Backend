const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Route để lấy tất cả các bài hát
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find().populate('artist album');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
