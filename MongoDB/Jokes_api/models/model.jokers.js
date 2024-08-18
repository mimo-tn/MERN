const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type : String,
        require : [true,"{PATH} is required"],
        minLength : [9,"{PATH} must have at least 10 chars"]
    },
    punchline:{
        type : String,
        require : [true,"{PATH} is required"],
        minLength : [2,"{PATH} must have at least 3 chars"]

    }
},{timestamps : true});
const Joke = mongoose.model("Joke",JokeSchema);
module.exports = Joke;