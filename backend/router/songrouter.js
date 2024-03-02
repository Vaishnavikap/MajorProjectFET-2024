const express = require("express");
const {uploadSong}= require("../controller/songcontroller");
const songRouter = express.Router();


const handleUploadSong = async (req, res) => {
    try {
      await uploadSong(req, res);
    } catch (error) {
      console.error('Error uploading song:', error);
      return res.status(500).json({ error: 'Error uploading the song.' });
    }
  };
  songRouter.post("/song", handleUploadSong);
  console.log("songs")
  

module.exports = songRouter;