var es = require('event-stream');
var sass = require('node-sass');

module.exports = function(file){
	return es.map(function(buf, enc, next){
		sass.render({
			data: file,
			success: function(result){
				this.push(result.css);
				next();
			},
			error: function(error){
				next(error);
			}
		});
	});
};