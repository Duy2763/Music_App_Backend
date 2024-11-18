const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Route để lấy tất cả các bài hát
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find().populate('artist').populate('album');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy top 10 bài hát có nhiều lượt thích nhất
router.get('/top-liked-songs', async (req, res) => {
  try {
    const topLikedSongs = await Song.find().sort({ likes: -1 }).limit(10).populate('artist').populate('album');
    res.json(topLikedSongs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy top 10 bài hát có nhiều lượt nghe nhất
router.get('/top-listened-songs', async (req, res) => {
  try {
    const topListenedSongs = await Song.find().sort({ listens: -1 }).limit(10).populate('artist').populate('album');
    res.json(topListenedSongs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy 3 bài hát đầu tiên
router.get('/first-three-songs', async (req, res) => {
  try {
    const firstThreeSongs = await Song.find().limit(3).populate('artist').populate('album');
    res.json(firstThreeSongs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
