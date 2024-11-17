const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: { type: String, required: true },
  followers: { type: Number, default: 0 },
  imageLink: { type: String },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }]
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
