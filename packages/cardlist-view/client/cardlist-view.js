
Template.cardListView.helpers({
	cards: function() {				
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getCriteria(), {sort: {updatedAt: -1}});
	},	
	numCards: function() {		
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getCriteria()).fetch().length;
	},

	numArchivedCards: function() {
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getArchivedCriteria()).fetch().length;
	},
});

Template.cardListView.events({
	'click #clear-status-filter': function() {
		Session.set('cardListView.statusFilter', null);
	}
});

Template.visibilityDropdown.events({
	'click #set-active-filter': function() {
		Session.set('cardListView.archivedFilter', false);
	},

	'click #set-archived-filter': function() {
		Session.set('cardListView.archivedFilter', true);
	},
});

Template.cardItem.helpers({
	lastUpdatedMsg: function() {
		if(moment(this.createdAt).isSame(this.updatedAt)) {
			return "Created";
		} else {
			return "Last updated ";
		}
	},

	archivedClass: function() {		
		return this.archived ? "archived" : "";
	}
});

Template.cardItem.events({
	'click #title-link': function() {		
		Boom.Router.showCardDetailPage(this);
	}
});

Template.cardListView.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});


Template.cardTypeDropdown.helpers({	
	selectedCardType: function() {
		var label;
		var cardTypeFilter = Session.get('cardListView.cardTypeFilter');
		if(cardTypeFilter) {
			label = cardTypeFilter.label;
		}
		return label;
	},

	cardTypes: function() {
		var cardTemplates = _.keys(Session.get('currentBoardView').filters);
		var result = _.map(cardTemplates, function(cardTemplate) {
			var label = 'Unknown';
			var t = Boom.CardTemplates[cardTemplate];
			if(t) {
				label = t.label;
			}
			return {
				label: label,
				value: cardTemplate
			}
		});
		return result;
	}
});

Template.statusDropdown.helpers({	
	selectedStatus: function() {
		var label = "all";
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			label = statusFilter.label;
		}
		return label;
	},

	statusFields: function() {
		return Boom.CardTemplates["TaskCard"].fields["status"].values;
	}
});

Template.visibilityDropdown.helpers({
	selectedVisibility: function() {
		var label = "active";
		var archived = Session.get('cardListView.archivedFilter');
		if(archived) {
			label = "archived";
		}
		return label;
	}
});

Template.statusItem.events({
	'click': function() {
		Session.set('cardListView.statusFilter', this);
	}
});

SearchCriteria = {
	getCriteria: function() {
		var criteria = {
			boardId: Session.get('currentBoardId'),
			archived: false			
		}
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			criteria.status = statusFilter.value;
		}
		var archivedFilter = Session.get('cardListView.archivedFilter');
		if(archivedFilter) {
			criteria.archived = archivedFilter;
		}
		return criteria;
	},

	getArchivedCriteria: function() {
		var criteria = {
			boardId: Session.get('currentBoardId'),
			archived: false			
		}
		var statusFilter = Session.get('cardListView.statusFilter');
		if(statusFilter) {
			criteria.status = statusFilter.value;
		}		
		criteria.archived = true;
		return criteria;
	}
};