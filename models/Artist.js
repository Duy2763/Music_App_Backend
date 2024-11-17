const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: String,
  image: String,
  followers: Number,
  about: {
    image: String,
    description: String
  }
});

module.exports = mongoose.model('Artist', artistSchema);
