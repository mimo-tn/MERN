const Player = require("../models/model.player");


module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => {
            res.status(201).json({ Player: newPlayer })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
module.exports.findAllPlayers = (req, res) =>{
    Player.find()
        .then((allPlayers) => {
            res.json({Players : allPlayers})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports.findOnePlayer = (req , res) => {
    Player.find({_id : req.params.id})
        .then(onePlayer => {
            res.json({Player : onePlayer})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
module.exports.updatePlayer = (req , res) => {
    Player.findOneAndUpdate({_id : req.params.id},
                            req.body,
                            { new : true, runValidators: true}
    )
        .then(updatePlayer =>{
            res.json({Player : updatePlayer})
        })
        .catch(err => {
            res.status(400).json(err)
        })   
}

module.exports.deletePlayer = (req , res) => {
    Player.deleteOne({_id : req.params.id})
    .then(result =>{
        res.json({result : result})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}