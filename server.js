var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


var middleware = {
	requireAuthentication: function (req, res, next) {
         console.log('private route hit!');
         next();
	},
	logger: function(req,res,next) {
		//var theDate = new Date().toString();
		var theDate = new Date();
		console.log('Request at Date: <<'+theDate.getFullYear()+'/'+theDate.getMonth()+'/'+theDate.getDate()+' '+theDate.getMinutes()+':'+theDate.getSeconds()+':'+theDate.getMilliseconds()+'>> Method: <<' + req.method + '>> Original Url: <<'+ req.originalUrl+'>>');
		next();
	}
}

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