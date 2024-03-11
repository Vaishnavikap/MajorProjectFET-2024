const express = require('express');
const playlistRouter = express.Router();
const { createPlaylist, getAllPlaylists, getPlaylistById,getPlaylistByUserId ,deletePlaylist} = require('../controller/playlistcontroller');

playlistRouter.post('/playlist', createPlaylist);
playlistRouter.get('/playlists', getAllPlaylists);
playlistRouter.get('/playlist/:playlistId', getPlaylistById); 
playlistRouter.get('/playlist/userId/:userId',getPlaylistByUserId );
playlistRouter.delete('/playlist/:playlistId', deletePlaylist);

module.exports = playlistRouter;
