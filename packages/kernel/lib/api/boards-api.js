Boom = Boom || {};

Boom.Board = {
	findAllTemplates: function() { 
		var templates = _.map(Boom.BoardTemplates, function(t) {
			return t;
		});
		return templates;
	}
};