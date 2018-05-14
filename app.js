const express = require("express");
const app = express();
const https = require("https");

// set up body parser and a css files
app.use(express.static(__dirname + '/'));

// run either in production or dev
app.set('port', (process.env.PORT || 5000));

// ping app in every 10 minutes (600000)
setInterval(function () {
    https.get("https://olafvaher.herokuapp.com");
    https.get("https://gentle-anchorage-53988.herokuapp.com");
    https.get("https://quiet-waters-93112.herokuapp.com");
}, 3000);

// basic routes
app.get("/", function (req, res) {
    res.sendFile('index.html', { "root": __dirname });
});

app.get("/budgety-app", function (req, res) {
    res.sendFile('/budgety-app/index.html', { "root": __dirname });
});

app.get("/pig-game", function (req, res) {
    res.sendFile('/pig-game/index.html', { "root": __dirname });
});

app.get("/random-quote", function (req, res) {
    res.sendFile('/random-quote/index.html', { "root": __dirname });
});

app.listen(app.get('port'), function () {
    console.log("Server started.");
});