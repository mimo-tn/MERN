const JokeController = require ("../controllers/controller.jokers");

module.exports = app => {
    app.get('/api/jokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}
