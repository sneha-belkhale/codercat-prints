var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var os = require('os');
var pty = require('node-pty');

let port = 8082;
app.use(express.static('public'))
app.use(express.static('public/html'))

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
