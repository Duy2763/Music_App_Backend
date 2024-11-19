const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');
const mongoose = require('mongoose');

// Route để lấy tất cả các nghệ sĩ
router.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy thông tin nghệ sĩ theo ID
router.get('/artist/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const artist = await Artist.findById(new mongoose.Types.ObjectId(artistId));
    res.json(artist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
