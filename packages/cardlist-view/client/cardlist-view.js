Template.cardListView.helpers({
	cards: function() {
		return Cards.find({boardId: Session.get('currentBoardId')});
	},

	taskCards: function() {
		var col =  Boom.CardTypes["TaskCard"];
		return col;
	}
});

Template.cardItem.events({
	'click #show-more-button': function() {
		Router.go("/board/" + Session.get('currentBoardId') + "/card/" + this._id);
	}
});

