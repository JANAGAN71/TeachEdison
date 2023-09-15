const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required: false,
    },
    categories:{
        type:String,
        required:false
    },
}, {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);