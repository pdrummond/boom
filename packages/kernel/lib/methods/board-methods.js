Meteor.methods({
	createBoard: function(templateName, attrs) {
		console.log("Method.createBoard");
		//TODO: Add checks here
		attrs = _.extend(attrs, {			
			createdAt: new Date().getTime(),
			templateName: templateName,   
		});
		var boardId = Boom.BoardCollections[templateName].insert(attrs);
		return boardId;
	}
});