const express = require("express");
const {uploadSong,getAllSongs,deleteSong ,getSongById,getSongByArtist}= require("../controller/songcontroller");
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



    const handlegettingSong = async (req, res) => {
      try {
          const songs = await getAllSongs(); 
          res.status(200).json(songs); // Send fetched songs in the response
      } catch (error) {
          console.error('Error to get song:', error);
          return res.status(500).json({ error: 'Error to get the song.' });
      }
  };
  songRouter.get("/getsong", handlegettingSong);
 songRouter.get("/getSongById/:Id",getSongById);
 songRouter.get("/getSongByArtist/:artist",getSongByArtist);
songRouter.delete('/deleteSong/:Id', deleteSong);


module.exports = songRouter;


