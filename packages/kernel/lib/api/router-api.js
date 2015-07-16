Boom = Boom || {};

Boom.Router = {
	showCurrentBoardPage: function() {
		Router.go("/board/" + Session.get('currentBoardId') + "/cards");
	},

	showBoardListPage: function() {
		Router.go("/");
	},

	showCreateBoardPage: function(opts) {
		Router.go("/board/create/" + opts.boardTemplate);
	},

	showBoardPage: function(opts) {
		Router.go("/" + opts.boardTemplate + "/" + opts.boardId + "/cards");
	}
}