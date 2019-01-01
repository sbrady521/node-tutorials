var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/',function(req,res){
	res.send('<html><head></head><body><h1>Hello world</h1></body></html>');
});
app.get('/api',function(req,res){
	res.json({firstname:'John',lastname:'Doe'}); // convert object to JSON.
});

app.listen(port);

