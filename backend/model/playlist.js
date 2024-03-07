const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  playlistId: { type: Number, unique: true, required: true }, 
  name: {
    type: String,
    required: true,
  },
  songs: [
    {
      title: {
        type: String,
        required: true,
      },
      customId: {
        type: Number, 
        required: true,
      },
    },
  ],
});

 

module.exports = mongoose.model('Playlist', playlistSchema);