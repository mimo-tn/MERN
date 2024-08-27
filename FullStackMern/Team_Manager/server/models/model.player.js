const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name:{
        type : String,
        require : [true,"{PATH} is required"],
        minlength : [3,"{PATH} must have at least 3 chars : error from back-end"]
    },
    preferred_position:{
        type : String,
        require : [true,"{PATH} is required"],
        minlength : [3,"{PATH} must have at least 3 chars : error from back-end"]
    }
},{timestamps : true});
const Player = mongoose.model("Player",PlayerSchema)
module.exports = Player;