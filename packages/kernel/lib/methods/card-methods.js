Meteor.methods({
	createCard: function(templateName, attrs) {		
		//TODO: Add checks here
		attrs = _.extend(attrs, {			
			createdAt: new Date().getTime(),
			templateName: templateName,
		});		
		var cardId = Boom.CardCollections[templateName].insert(attrs);		
		return cardId;
	},

	updateCard: function(cardId, templateName, updateDoc) {
		//TODO: Add checks here
		/*attrs = _.extend(attrs, {			
			createdAt: new Date().getTime(),
			templateName: templateName,
		});*/
		Boom.CardCollections[templateName].update(cardId, updateDoc);				
	}
});