const LikeController = require("../contollers/like.controllers");

module.exports = app =>{
    app.get('/',LikeController.findAllLikes);
    app.get('/likes/:id', LikeController.findOneLike);
    app.patch('/likes/edit/:id', LikeController.updateLike);
    app.post('/likes/new', LikeController.createLike);
    app.delete('/likes/:id/delete', LikeController.deleteLike);
}