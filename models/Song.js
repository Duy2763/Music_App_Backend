const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  timestamp: Date,
  likes: Number,
  user: {
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String
  },
  replies: [{
    text: String,
    timestamp: Date,
    likes: Number,
    user: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      image: String
    }
  }]
});

const songSchema = new mongoose.Schema({
  name: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  image: String,
  listens: Number,
  likes: Number,
  shares: Number,
  comments: [commentSchema]
});

module.exports = mongoose.model('Song', songSchema);