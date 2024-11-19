const express = require('express');
const router = express.Router();
const Album = require('../models/Album');
const mongoose = require('mongoose');

// Route để lấy tất cả các album
router.get('/albums', async (req, res) => {
  try {
    const albums = await Album.find().populate('artist');
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy các album theo ID nghệ sĩ
router.get('/albums-by-artist/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const albums = await Album.find({ artist: new mongoose.Types.ObjectId(artistId) }).populate('artist');
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
