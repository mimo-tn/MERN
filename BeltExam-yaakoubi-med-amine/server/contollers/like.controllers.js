const Like = require("../models/like.model");


module.exports.createLike = (req, res) => {
    Like.create(req.body)
        .then(newLike => {
            res.status(201).json({ Like: newLike })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
module.exports.findAllLikes = (req, res) =>{
    Like.find()
        .then((allLikes) => {
            res.json({Likes : allLikes})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.findOneLike = (req , res) => {
    Like.find({_id : req.params.id})
        .then(oneLike => {
            res.json({Like : oneLike})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.updateLike = (req , res) => {
    Like.findOneAndUpdate({_id : req.params.id},
                            req.body,
                            { new : true, runValidators: true}
    )
        .then(updateLike =>{
            res.json({Like : updateLike})
        })
        .catch(err => {
            res.status(400).json(err)
        })   
}

module.exports.deleteLike = (req , res) => {
    Like.deleteOne({_id : req.params.id})
    .then(result =>{
        res.json({result : result})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}