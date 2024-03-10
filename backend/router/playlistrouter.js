const express = require('express');
const playlistRouter = express.Router();
const { createPlaylist, getAllPlaylists, getPlaylistById,getPlaylistByUserId } = require('../controller/playlistcontroller');

playlistRouter.post('/playlist', createPlaylist);
playlistRouter.get('/playlists', getAllPlaylists);
playlistRouter.get('/playlist/:playlistId', getPlaylistById); 
playlistRouter.get('/playlist/userId/:userId',getPlaylistByUserId )

module.exports = playlistRouter;
