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

module.exports = {
    createPlaylist,
    getAllPlaylists
};
