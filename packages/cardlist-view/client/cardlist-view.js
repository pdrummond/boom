Template.cardListView.helpers({
	cards: function() {
		var criteria = {
			boardId: Session.get('currentBoardId'),
		}
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			criteria.status = statusFilter.value;
		}
		return Boom.CardCollections.TaskCard.find(criteria);
	},	

	selectedStatus: function() {
		var label = "All";
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			label = statusFilter.label;
		}
		return label;
	},

	statusFields: function() {
		return Boom.CardTemplates["TaskCard"].fields["status"].autoform.options;
	},	
});

Template.cardListView.events({
	'click #clear-status-filter': function() {
		Session.set('cardListView.statusFilter', null);
	}
})

Template.cardItem.events({
	'click #show-more-button': function() {		
		Boom.Router.showCardDetailPage(this);
	}
});

Template.cardListView.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});

Template.statusItem.events({
	'click': function() {
		Session.set('cardListView.statusFilter', this);
	}
})