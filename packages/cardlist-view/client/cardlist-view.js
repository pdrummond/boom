Template.cardListView.helpers({
	cards: function() {
		return Cards.find();
	}
});

Template.cardItem.events({
	'click #show-more-button': function() {
		Router.go("/board/" + Session.get('currentBoardId') + "/card/" + this._id);
	}
});

