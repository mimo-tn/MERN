const AuthorController = require("../controllers/controllers.author");

module.exports = app =>{
    app.get('/Authors',AuthorController.findAllAuthors);
    app.get('/Authors/:id', AuthorController.findOneAuthor);
    app.patch('/Authors/:id/edit', AuthorController.updateAuthor);
    app.post('/Authors/new', AuthorController.createAuthor);
    app.delete('/Authors/:id/delete', AuthorController.deleteAuthor);
}