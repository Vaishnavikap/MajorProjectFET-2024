const express = require('express');
const playlistRouter = express.Router();
const { createPlaylist, getAllPlaylists, getPlaylistById } = require('../controller/playlistcontroller');

playlistRouter.post('/playlist', createPlaylist);
playlistRouter.get('/playlists', getAllPlaylists);
playlistRouter.get('/playlist/:playlistId', getPlaylistById); // New route for getPlaylistById

module.exports = playlistRouter;