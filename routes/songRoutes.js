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

// Route để thêm reply vào comment
router.post('/songs/:songId/comments/:commentId/replies', async (req, res) => {
  const { songId, commentId } = req.params;
  const { text, userId, userName, userImage } = req.body;

  try {
    // Tìm bài hát bằng songId
    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    // Tìm comment trong bài hát đó bằng commentId
    const comment = song.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Tạo reply mới
    const newReply = {
      text,
      timestamp: new Date(),
      likes: 0,
      user: {
        id: new mongoose.Types.ObjectId(userId),
        name: userName,
        image: userImage
      }
    };

    // Thêm reply vào comment
    comment.replies.push(newReply);
    await song.save();

    // Trả về phản hồi thành công
    res.status(201).json({ 
      message: 'Reply added successfully', 
      reply: {
        _id: comment.replies[comment.replies.length - 1]._id,
        text: newReply.text,
        timestamp: newReply.timestamp,
        likes: newReply.likes,
        user: newReply.user
      }
    });
  } catch (error) {
    console.error('Error adding reply:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Route để thêm comment vào bài hát
router.post('/songs/:songId/comments', async (req, res) => {
  const { songId } = req.params;
  const { text, userId, userName, userImage } = req.body;

  try {
    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    const newComment = {
      text,
      timestamp: new Date(),
      likes: 0,
      user: {
        id: new mongoose.Types.ObjectId(userId),
        name: userName,
        image: userImage
      },
      replies: []
    };

    song.comments.push(newComment);
    await song.save();

    res.status(201).json({ 
      message: 'Comment added successfully', 
      comment: {
        _id: song.comments[song.comments.length - 1]._id,
        text: newComment.text,
        timestamp: newComment.timestamp,
        likes: newComment.likes,
        user: newComment.user,
        replies: newComment.replies
      }
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
