UI.registerHelper('cardTemplates', function(context, options) {
	return _.map(Boom.CardTemplates, function(t) {
		return t;
	});
});