Template.statusDropdownWidget.helpers({
numCards: function() {		
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getCriteria()).fetch().length;
	},

	numArchivedCards: function() {
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getArchivedCriteria()).fetch().length;
	},

	selectedStatus: function() {
		var label = "all";
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			label = statusFilter.label;
		}
		return label.toLowerCase();
	},

	selectedVisibility: function() {
		var label = "active";
		var archived = Session.get('cardListView.archivedFilter');
		if(archived) {
			label = "archived";
		}
		return label;
	},

	statusFields: function() {
		return Boom.CardTemplates["TaskCard"].fields["status"].values;
	}
});

Template.statusItem.events({
	'click': function() {
		Session.set('cardListView.statusFilter', this);
	}
});