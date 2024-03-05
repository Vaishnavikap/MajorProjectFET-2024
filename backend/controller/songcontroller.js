const multer = require('multer');
const Song = require("../model/songmodel");
const { response } = require('express');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.startsWith('audio')) {
      cb(null, 'uploads/audio/');
    } else if (file.mimetype.startsWith('image')) {
      cb(null, 'uploads/images/');
    } else {
      cb(new Error('Invalid file type.'), null);
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadSong = async (req, res) => {
  try {
  
    upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'songFile', maxCount: 1 }])(req, res, async function (err) {
      if (err) {
        console.error('UploadError:', err);
        return res.status(400).json({ error: err.message });
      }

      const { title, artist, album } = req.body;
      const imageFilePath = req.files['imageFile'][0].path;
      console.log(imageFilePath);
      const audioFilePath = req.files['songFile'][0].path;
      const customId = await generateCustomId();
      const song = new Song({
        customId,
        title,
        artist,
        album,
        imageFile: imageFilePath,
        audioFile: audioFilePath
      });

      try {
        const result = await song.save();
        return res.status(200).json({ message: "Song uploaded successfully", data: result });
  
      } catch (error) {
        console.error('DatabaseError:', error);
        return res.status(500).json({ error: 'Error saving the song to the database.' });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  
  }
  
};
// Function to generate customId
const generateCustomId = async () => {
  try {
    // Find the highest existing customId
    const highestExistingCustomIdSong = await Song.findOne().sort({ customId: -1 });

    // Increment the highest existing customId by 1 or start from 1 if no song exists
    let newCustomId;
    if (highestExistingCustomIdSong && highestExistingCustomIdSong.customId) {
      newCustomId = highestExistingCustomIdSong.customId + 1;
    } else {
      newCustomId = 1;
    }

    return newCustomId;
  } catch (error) {
    console.error('Error generating customId:', error);
    throw new Error('Error generating customId');
  }
};



const getAllSongs = async () => {
  try {
      const songs = await Song.find();
      // Map over the songs array and add image URLs to each song object
      const songsWithImageUrls = songs.map(song => {
        return {
          ...song.toObject(),
          imageUrl: `http://localhost:3000/${song.imageFile}` // Assuming imageFile contains the path to the image
        };
      });
      return songsWithImageUrls;
  } catch (error) {
      console.error('Error fetching songs:', error);
      throw new Error('Error fetching songs from the database.');
  }
};
const deleteSong = async (req, res) => {
  console.log("helooooooo");
  try {
      const result = await Song.deleteOne({'customId': req.params.Id});
      res.send(result);
      console.log(req.params.Id);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  uploadSong,getAllSongs,deleteSong
};
