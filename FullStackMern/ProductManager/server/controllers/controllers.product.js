const Product = require("../models/model.product");


module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ Product: newProduct })
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.findAllProducts = (req, res) =>{
    Product.find()
        .then((allProducts) => {
            res.json({Products : allProducts})
        })
        .catch((err) =>{
            res.json(err)
        });
}

module.exports.findOneProduct = (req , res) => {
    Product.find({_id : req.params.id})
        .then(oneProduct => {
            res.json({Product : oneProduct})
        })
        .catch((err) =>{
            res.json(err)
        });
}
module.exports.updateProduct = (req , res) => {
    Product.findOneAndUpdate({_id : req.params.id},
                            req.body,
                            { new : true, runValidators: true}
    )
        .then(updateProduct =>{
            res.json({Product : updateProduct})
        })
        .catch((err) =>{
            res.json(err)
        });     
}

module.exports.deleteProduct = (req , res) => {
    Product.deleteOne({_id : req.params.id})
    .then(result =>{
        res.json({result : result})
    })
    .catch((err) => {
        res.json(err)
    });
}