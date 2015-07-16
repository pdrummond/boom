

UI.registerHelper('allBoards', function(context, options) {
	var allBoards = [];
	_.each(Boom.Board.findAllTemplates(), function(t) {
		var boardCollection = Boom.BoardCollections[t.templateName].find().fetch();
	    allBoards = allBoards.concat(boardCollection);
	});
    return _.sortBy(allBoards, function(board) {return -board.createdAt;});
});

UI.registerHelper('boardTemplates', function(context, options) {
	return Boom.Board.findAllTemplates();
});