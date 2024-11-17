const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route để lấy thông tin người dùng
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('playlists songs albums artists');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
