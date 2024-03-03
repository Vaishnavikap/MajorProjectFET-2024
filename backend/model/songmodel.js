const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  customId: { type: Number, required: true }, 
  title: String,
  artist: String,
  album: String,
  imageFile: String,
  audioFile: String,

}, {
  toJSON: {
    virtuals: true,
 
 
  },
 
});

songSchema.virtual('imageUrl').get(function() {

  return `http://localhost:3000/${this.imageFilePath}`;
});

songSchema.virtual('audioUrl').get(function() {
  return `http://localhost:3000/${this.audioFilePath}`;
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
