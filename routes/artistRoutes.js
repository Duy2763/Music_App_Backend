const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

// Route để lấy tất cả các nghệ sĩ
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find().populate('songs albums');
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;