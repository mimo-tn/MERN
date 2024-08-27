const PlayerController = require("../controllers/controllers.player");

module.exports = app =>{
    app.get('/players/list',PlayerController.findAllPlayers);
    app.get('/status/game/1',PlayerController.findAllPlayers);
    app.get('/players/:id', PlayerController.findOnePlayer);
    app.patch('/players/:id/edit', PlayerController.updatePlayer);
    app.post('/players/addplayer', PlayerController.createPlayer);
    app.delete('/players/:id/delete', PlayerController.deletePlayer);
}