const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
  views: { type: Number, default: 0 },
  audioLink: { type: String, required: true },
  imageLink: { type: String },
  album: { type: Schema.Types.ObjectId, ref: 'Album' }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
