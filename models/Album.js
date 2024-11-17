const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  image: String,
  followers: Number
});

module.exports = mongoose.model('Album', albumSchema);
