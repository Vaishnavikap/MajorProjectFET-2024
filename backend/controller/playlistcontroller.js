const Playlist = require('../model/playlist');

const generatePlaylistId = async () => {
    try {
      const highestExistingPlaylistId = await Playlist.findOne().sort({ playlistId: -1 });
      let newPlaylistId;
      if (highestExistingPlaylistId && highestExistingPlaylistId.playlistId) {
        newPlaylistId = highestExistingPlaylistId.playlistId + 1;
      } else {
        newPlaylistId = 1;
      }
      return newPlaylistId;
    } catch (error) {
      console.error('Error generating playlistId:', error);
      throw new Error('Error generating playlistId');
    }
  };
  
  const createPlaylist = async (req, res) => {
    try {
      const { name, songs } = req.body;
      const playlistId = await generatePlaylistId(); // Use the generated playlistId
      const playlist = new Playlist({ playlistId, name, songs });
      const savedPlaylist = await playlist.save();
      res.json(savedPlaylist);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlaylistById = async (req, res) => {
  const { playlistId } = req.params;

  try {
    const playlist = await Playlist.findOne({ playlistId: parseInt(playlistId) });
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    console.error('Error fetching playlist:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById
};