Meteor.methods({
	createBoard: function(templateName, attrs) {
		console.log("Method.createBoard");
		//TODO: Add checks here
		var now = new Date().getTime();
		attrs = _.extend(attrs, {			
			templateName: templateName,
			createdAt: now			
		});
		console.log("createBoard: templateName = " + templateName);
		var boardId = Boom.BoardCollections[templateName].insert(attrs);
		console.log("createBoard: attrs = " + JSON.stringify(attrs));

		var channelId = Channels.insert({
    		title: attrs.title,
    		channelType: 'board',
    		boardId: boardId,
  		});
  		Boom.BoardCollections[templateName].update(boardId, {$set: {channelId: channelId}});
		return boardId;
	}
});