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
});

playlistSchema.virtual('imageUrl').get(function() {

  return `http://localhost:3000/${this.imageFilePath}`;
});
playlistSchema.virtual('audioUrl').get(function() {
  return `http://localhost:3000/${this.audioFilePath}`;
});

 

module.exports = mongoose.model('Playlist', playlistSchema);
