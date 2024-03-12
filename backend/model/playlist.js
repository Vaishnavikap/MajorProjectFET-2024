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
      artist: {
        type: String,
        required: true,
      },
      album: {
        type: String,
        required: true,
      },
      imageFile: {
        type: String,
        required: true,
      },
      audioFile: {
        type: String,
        required: true,
      },
    },
  ],
  

  userId: { type: String, required: true } 
});

 

module.exports = mongoose.model('Playlist', playlistSchema);
