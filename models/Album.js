const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { type: String, required: true },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
  imageLink: { type: String },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true }
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
