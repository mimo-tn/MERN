const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type : String,
        // require : [true,"{PATH} is required"],
        minlength : [2,"{PATH} must have at least 3 chars : error from back-end"]
    }
},{timestamps : true});
const Author = mongoose.model("Author",AuthorSchema)
module.exports = Author;