Template.cardListView.helpers({
	cards: function() {
		return Boom.CardCollections.TaskCard.find();
	}
});

Template.cardItem.events({
	'click #show-more-button': function() {
		Router.go("/board/" + Session.get('currentBoardId') + "/" + Boom.CardListView.cardTemplate + "/" + this._id);
	}
});

Template.cardListView.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});