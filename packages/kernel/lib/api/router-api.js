Boom = Boom || {};

Boom.Router = {
	showCurrentBoardPage: function() {
		Router.go("/board/" + Session.get('currentBoardId') + "/cards");
	}
}