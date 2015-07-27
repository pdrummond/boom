Meteor.methods({
	createCard: function(templateName, attrs) {		
		//TODO: Add checks here
		attrs = _.extend(attrs, {			
			createdAt: new Date().getTime(),
			templateName: templateName,
		});		
		attrs.cid = incrementCounter(Counters, attrs.boardId);
    	console.log("CID: " + attrs.cid + " (" + attrs.boardId + ")");
		var cardId = Boom.CardCollections[templateName].insert(attrs);

		var channelId = Channels.insert({
    		title: attrs.title,
    		channelType: 'card',
    		boardId: attrs.boardId,
    		cardId: cardId,    		
  		});
  		Boom.CardCollections[templateName].update(cardId, {$set: {channelId: channelId}});

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