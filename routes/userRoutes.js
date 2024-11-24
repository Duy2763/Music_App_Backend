const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

// Route để lấy tất cả người dùng
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để lấy thông tin người dùng theo ID và populate các trường liên quan
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(new mongoose.Types.ObjectId(userId))
      .populate('songs')
      .populate('albums')
      .populate('artists');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route để tạo người dùng mới
router.post('/users', async (req, res) => {
  const { name, password, image } = req.body;
  const user = new User({
    name,
    password,
    image,
    songs: [],   // Mảng rỗng cho các bài hát yêu thích
    albums: [],  // Mảng rỗng cho các album yêu thích
    artists: []  // Mảng rỗng cho các nghệ sĩ yêu thích
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route để lấy thông tin người dùng theo tên và mật khẩu, bao gồm cả album, bài hát và nghệ sĩ
router.get('/getUserByNameAndPassword', async (req, res) => {
  const { name, password } = req.query;
  try {
    const user = await User.findOne({ name, password })
      .populate('songs')
      .populate('albums')
      .populate('artists');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;