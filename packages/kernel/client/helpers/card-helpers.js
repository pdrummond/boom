UI.registerHelper('cardTemplates', function(context, options) {
	return _.map(Boom.CardTemplates, function(t) {
		return t;
	});
});

UI.registerHelper('currentCard', function(context, options) {	
	return Session.get('currentCard');
});