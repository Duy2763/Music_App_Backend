const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
