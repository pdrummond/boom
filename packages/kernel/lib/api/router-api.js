Boom = Boom || {};

Boom.Router = {
	showCurrentBoardPage: function() {
		Router.go("/board/" + Session.get('currentBoardTemplate') + "/" + Session.get('currentBoardId') + "/cards");
	},

	showBoardListPage: function() {
		Router.go("/");
	},

	showCreateBoardPage: function(opts) {
		Router.go("/board/create/" + opts.boardTemplate);
	},

	showBoardPage: function(opts) {
		Router.go("/board/" + opts.boardTemplate + "/" + opts.boardId + "/cards");
	},

	changeBoardViewTo: function(viewId) {
		Router.go("/board/" + Session.get('currentBoardTemplate') + "/" + Session.get('currentBoardId') + "/" + viewId);
	},

	showCardDetailPage: function(card) {
		Router.go("/board/" + Session.get('currentBoardTemplate') + "/" + Session.get('currentBoardId') + "/card/" + card.templateName + "/" + card._id + "/detail");
	}
}