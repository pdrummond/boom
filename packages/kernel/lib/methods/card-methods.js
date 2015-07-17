Meteor.methods({
	createCard: function(templateName, attrs) {		
		//TODO: Add checks here
		attrs = _.extend(attrs, {			
			createdAt: new Date().getTime(),
			templateName: templateName,
		});		
		var cardId = Boom.CardCollections[templateName].insert(attrs);		
		return cardId;
	}
});