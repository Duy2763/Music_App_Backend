const express = require('express');
const router = express.Router();
const Song = require('../models/Song');
const mongoose = require('mongoose');

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

// Route để lấy top 10 bài hát có nhiều lượt chia sẻ nhất
router.get('/top-shared-songs', async (req, res) => {
  try {
    const topSharedSongs = await Song.find().sort({ shares: -1 }).limit(10).populate('artist').populate('album');
    res.json(topSharedSongs);
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

// Route để lấy các bài hát theo album
router.get('/songs-by-album/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const songs = await Song.find({ album: new mongoose.Types.ObjectId(albumId) }).populate('artist').populate('album');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route để lấy các bài hát theo ID nghệ sĩ
router.get('/songs-by-artist/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const songs = await Song.find({ artist: new mongoose.Types.ObjectId(artistId) }).populate('artist').populate('album');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
