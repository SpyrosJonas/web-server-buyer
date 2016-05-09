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

module.exports = middleware;
