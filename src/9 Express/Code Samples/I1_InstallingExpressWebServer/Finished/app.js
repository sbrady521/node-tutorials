var express = require('express');
var app = express();
var fs = require('fs')

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	fs.createReadStream(__dirname + '/test.htm').pipe(res)
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);