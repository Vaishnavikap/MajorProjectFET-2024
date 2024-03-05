const express = require("express");
const Playlist = require("../model/playlist"); // Assuming you have a Playlist model

const playlistRouter = express.Router();

// Route to create a playlist
playlistRouter.post("/playlist", async (req, res) => {
  try {
    const { name, songs } = req.body;
    const playlist = new Playlist({ name, songs });
    const savedPlaylist = await playlist.save();
    res.status(201).json(savedPlaylist);
  } catch (error) {
    console.error('Error creating playlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all playlists
playlistRouter.get("/playlists", async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.status(200).json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other playlist-related routes as needed

module.exports = playlistRouter;
