const express = require("express");
const app = express();
const http = require("http");

// set up body parser and a css files
app.use(express.static(__dirname + '/'));

// run either in production or dev
app.set('port', (process.env.PORT || 5000));

// ping app in every 10 minutes (600000)
setInterval(function() {
    http.get("http://olafvaher.herokuapp.com");
}, 600000);

// basic routes
app.get("/", function(req, res) {
    res.sendFile('index.html', {"root": __dirname});
});

app.get("/budgety-app", function(req, res) {
    res.sendFile('/budgety-app/index.html', {"root": __dirname});
});

app.get("/pig-game", function(req, res) {
    res.sendFile('/pig-game/index.html', {"root": __dirname});
});

app.get("/random-quote", function(req, res) {
    res.sendFile('/random-quote/index.html', {"root": __dirname});
});

app.listen(app.get('port'), function() {
    console.log("Server started.");
});