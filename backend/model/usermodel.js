
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
  {
    userId: { type: Number, required: true }, 
      FirstName: { type: String, required: true },
      LastName: { type: String, required: true },
      email: { type: String, required: true ,  unique: true},
      password: { type: String, required: true }, 
      isAdmin:{type:Boolean,default:false},
      roles: { type:[Schema.Types.ObjectId],required:true,ref:"Role" },
      playlists: [{
     
        playlistId: {
          type: Number,
          required: true,ref:"Playlist"
        },
        name: {
          type: String,
          required: true
        }
      }]
  },
  {
    timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)


// 
