var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

//console.log(PORT);

// app.get('/', function (req, res) {
//   //all request from user 
//   res.send('Hello Express!');

// });

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About us!');
});

app.use(express.static(__dirname+ '/public'));

console.log(__dirname);


app.listen(PORT, function () {
	console.log('Express started on port '+ PORT+ '!');
});