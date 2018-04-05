const express = require("express");
const app = express();

// set up body parser and a css files
app.use(express.static(__dirname + '/'));

// run either in production or dev
app.set('port', (process.env.PORT || 5000));

// basic routes
app.get("/", function(req, res) {
    res.sendFile('index.html', {"root": __dirname});
});

app.get("/budgety", function(req, res) {
    res.sendFile('/budgety/index.html', {"root": __dirname});
});

app.get("/pig-game", function(req, res) {
    res.sendFile('/pig-game/index.html', {"root": __dirname});
});

app.listen(app.get('port'), function() {
    console.log("Server started.");
});