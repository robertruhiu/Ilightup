const cors = require('cors')
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const morgan = require('morgan')
// Requiring passport as we've configured it

//
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8081;
const db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

//
// Requiring our routes

require("./routes/routes.js")(app);
//
// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
