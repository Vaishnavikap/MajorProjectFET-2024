const express = require('express');
const playlistRouter = express.Router();
const { createPlaylist, getAllPlaylists } = require("../controller/playlistcontroller");


playlistRouter.post('/playlist', createPlaylist);

playlistRouter.get('/playlists',getAllPlaylists);

module.exports = playlistRouter;