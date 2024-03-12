const mongoose = require("mongoose")

const { Schema } = mongoose;
const TokenSchema = mongoose.Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
        },
        token:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            expires:300
        }
    }
);

module.exports = mongoose.model("Token", TokenSchema)