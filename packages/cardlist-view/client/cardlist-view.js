Template.cardListView.helpers({
	cards: function() {
		return Boom.CardCollections.TaskCard.find({boardId: Session.get('currentBoardId')});
	}
});

Template.cardItem.events({
	'click #show-more-button': function() {		
		Boom.Router.showCardDetailPage(this);
	}
});

Template.cardListView.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});