const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type : String,
        require : [true,"{PATH} is required"],
        minlength : [2,"{PATH} must have at least 3 chars"]
    },
    price:{
        type : Number,
        require : [true, "{PATH} is required"],
        min : [2, "{PATH} price must be greeter than 2"]
    },
    description:{
        type : String,
        require : [true, "{PATH} is required"],
        minlength : [9,"{PATH} must have at least 10 chars"]
    }
},{timestamps : true});
const Product = mongoose.model("Product",ProductSchema)
module.exports = Product;