'use strict';

var express = require("express");
var path = require('path');
var project = require('./controllers/project');
var lang = require('./controllers/lang');
var http = require('http');


var app = express();
var server = http.createServer(app);

var port = 9000;
var root = path.normalize(__dirname + '/../')

app.set('appPath', 'client');
app.use(express.static(path.join(root, '.tmp')));
app.use(express.static(path.join(root, 'client')));

project.use('/:id/lang', lang);
app.use('/api/project', project);

app.all('*', function(req, res) {
  res.sendFile(app.get('appPath') + '/index.html', {root : root});
});

server.listen(port, 'localhost', function() {
	console.log("Listening on " + port);
});