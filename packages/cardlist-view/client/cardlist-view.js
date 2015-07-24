
Template.cardListView.helpers({
	cards: function() {
		var cardType = 'TaskCard';
		var cardTypeFilter = Session.get('cardListView.cardTypeFilter');
		if(cardTypeFilter) {
			cardType = cardTypeFilter.value;
		}
		var filterCriteria = Session.get('cardListView.filterCriteria');
		if(filterCriteria == null) {
			filterCriteria = {};
		}
		return Boom.CardCollections[cardType].find(filterCriteria, {sort: {updatedAt: -1}});
	},

	viewFilters: function() {
		var selectedCardType = Session.get('cardListView.cardType') || "TaskCard";
		var result = _.map(Session.get('currentBoardView').filters[selectedCardType], function(field) {
			var fieldValues = _.map(Boom.CardTemplates[selectedCardType].fields[field].values, function(values) {
				return _.extend(values, {
					field: field
				});
			});
			if(fieldValues == null) {
				fieldValues = [];
			}
			return {
				field: field,
				values: fieldValues
			}
		});
		console.log("viewFilters", JSON.stringify(result, null, 4));
		return result;
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
	},

	cardIcon: function() {
		var icon =  Boom.CardTemplates[this.templateName].icon;
		if(icon == null) {
			icon = 'fa-square';
		}
		return icon;
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

Template.viewFilterDropdown.helpers({	
	selectedFilter: function() {
		var label = "All";
		var filterCriteria = Session.get('cardListView.filterCriteria');
		if(filterCriteria) {
			label = Session.get('cardListView.filterLabels')[this.field];
		}
		return label;
	},

	filterFields: function() {
		return this.values;
	}
});

Template.filterItem.events({
	'click': function() {		
		var criteria = Session.get('cardListView.filterCriteria');
		if(criteria == null) {
			criteria = {};
		}
		criteria[this.field] = this.value;
		Session.set("cardListView.filterCriteria", criteria);
		var filterLabels = Session.get('cardListView.filterLabels');
		if(labels == null) {
			labels = {};
		}
		labels[this.field] = this.label;
		Session.set("cardListView.filterLabels", labels);
	}
});
Template.visibilityDropdown.helpers({
	selectedVisibility: function() {
		var label = "Active";
		var archived = Session.get('cardListView.archivedFilter');
		if(archived) {
			label = "Archived";
		}
		return label;
	}
});

Template.cardTypeItem.events({
	'click': function() {
		Session.set('cardListView.cardTypeFilter', this);
	}
});

SearchCriteria = {
	getCriteria: function() {
		var criteria = {
			boardId: Session.get('currentBoardId')			
		};	
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