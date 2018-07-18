const AuthController = require('../controllers/AuthController');
const Authpolicy = require('../policies/Authpolicy');
const SongsController = require('../controllers/SongsController');
module.exports = function(app) {
    app.post("/login",AuthController.login);
    app.post("/register",Authpolicy.register,AuthController.register);
    app.get("/songs",SongsController.index);
    app.post("/songs",SongsController.post);
    app.get("/songs/:songId",SongsController.show);
};
