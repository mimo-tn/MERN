const LikeSchema = new mongoose.Schema({
    thing: {
        type: String,
        minlength: [3, "{PATH} must contain at least 3 characters: error from back-end"],
        // required: [true, "{PATH} is required: error from back-end"]
    },
    description: {
        type: String,
        minlength: [3, "{PATH} must contain at least 3 characters: error from back-end"],
        // required: [true, "{PATH} is required: error from back-end"]
    },
    category: {
        type: String,
        required: [true, "Must have a {PATH}: error from back-end"],
        //MongoDB - Advanced Validations Black Belt********************************
        validate: {
            validator: function(value) {
                const validCategories = ['Person', 'Place', 'Thing', 'Idea', 'Other'];
                return validCategories.includes(value);
            },
            message: "{PATH} must be one of the following: Person, Place, Thing, Idea, Other : error from back-end"
        }
    },
    likes: {
        type: Number,
        min: [0, "Likes must be a positive number: error from back-end"]
    }
}, { timestamps: true });

const Like = mongoose.model("Like", LikeSchema);
module.exports = Like;
