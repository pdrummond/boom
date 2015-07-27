
Template.cardListView.helpers({
	cards: function() {
		var filter = {};
		var filterCriteria = Session.get('filterCriteria');
		var remainingText = filterCriteria;
		var re = new RegExp("([\\w\\.-]+)\\s*:\\s*([\\w\\.-]+)", "g");
		var match = re.exec(filterCriteria);
		while (match != null) {	   
			var field = match[1].trim();
			var value = match[2].trim();
			if(value == "true") {
				value = true;
			} else if(value == "false") {
				value = false;
			}
			remainingText = remainingText.replace(field, '');
			remainingText = remainingText.replace(value, '');
			remainingText = remainingText.replace(/:/g, '');
			filter[field] = value; 
			match = re.exec(filterCriteria);			
		}
		if(remainingText && remainingText.length > 0) {
			filter["$or"] = [{title: {$regex:remainingText}}, {content: {$regex:remainingText}}];
		}	
		var cardType = CardListHelpers.getDefaultCardType();
		var cardTypeFilter = Session.get('cardTypeFilter');
		if(cardTypeFilter) {
			cardType = cardTypeFilter.value;
		}
		filter.boardId = Session.get('currentBoardId');
		return Boom.CardCollections[cardType].find(filter, {sort: {updatedAt: -1}});
	},

	filterTitle: function() {
		var title = "All";
		var currentFilter = Session.get('currentFilter');
		if(currentFilter) {
			title = currentFilter.title;			
		}
		return title;
	},

	filterCriteria: function() {
		return Session.get('filterCriteria');
	},

	viewFilters: function() {
		var selectedCardType = Session.get('cardListView.cardType') || CardListHelpers.getDefaultCardType();
		var result = _.map(Session.get('currentBoardView').filters[selectedCardType], function(field) {
			var fieldValues = _.map(Boom.CardTemplates[selectedCardType].fields[field].values, function(values) {
				return _.extend(values, {
					fieldLabel: Boom.CardTemplates[selectedCardType].fields[field].label,
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
		var selectedCardType = Session.get('cardListView.cardType') || CardListHelpers.getDefaultCardType();
		return Boom.CardCollections[selectedCardType].find(SearchCriteria.getCriteria()).fetch().length;
	},

	numArchivedCards: function() {
		var selectedCardType = Session.get('cardListView.cardType') || CardListHelpers.getDefaultCardType();
		return Boom.CardCollections[selectedCardType].find(SearchCriteria.getArchivedCriteria()).fetch().length;
	},

	filters: function() {
		return Filters.find();
	},

	createBoxIcon: function() {
		var cardType = CardListHelpers.getDefaultCardType();
		var cardTypeFilter = Session.get('cardTypeFilter');
		if(cardTypeFilter) {
			cardType = cardTypeFilter.value;
		}
		return Boom.CardTemplates[cardType].icon;
	}
});

Template.cardListView.events({
	'keyup #filter-input': function(ev) {
		CardListHelpers.onFilterInput(ev);
	},


	"keydown #create-box-input": function(ev) {
		if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();
			var input = $('#create-box-input').val();
			if(input.length > 0) {
				var cardType = CardListHelpers.getDefaultCardType();
				var cardTypeFilter = Session.get('cardTypeFilter');
				if(cardTypeFilter) {
					cardType = cardTypeFilter.value;
				}		
				var card = {
					title: input,				
					boardId: Session.get('currentBoardId'),	
				};
				Boom.CardCollections[cardType].simpleSchema().clean(card);				
				Meteor.call('createCard', cardType, card, function(error, result) {
					if (error) {
						return alert(error.reason);
					} else {
						window.scrollTo(0,document.body.scrollHeight);
						$('#create-box-input').val("");
					}
				});
			}
		}
	},

	'click #save-filter': function() {
		var filter = $("#filter-input").val();		
		var title = prompt("Filter Title");		
		if(title != null) {
			Meteor.call('createFilter', {title: title, filter: filter, cardType: Session.get('cardTypeFilter')}, function(error, result) {
				if(error) {
					alert("Error creating filter: " + error);
				}
			});
		}
		
	},

	'click #all-filter': function() {
		Session.set('currentFilter', null);
		Session.set('filterCriteria', null);
	}
})


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
	},

	leftCardItemWidgets: function() {
		return CardListHelpers.cardItemWidgets(this, "leftWidgets");
	},

	rightCardItemWidgets: function() {
		return CardListHelpers.cardItemWidgets(this, "rightWidgets");
	},

	cardPrefix: function() {
		return Session.get('currentBoard').cardPrefix;
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
		var label = Boom.CardTemplates[CardListHelpers.getDefaultCardType()].labelPlural;
		var cardTypeFilter = Session.get('cardTypeFilter');
		if(cardTypeFilter) {
			label = cardTypeFilter.label;
		}		
		return label;
	},

	cardTypes: function() {	
		var cardTemplates = _.keys(Boom.CardTemplates);
		var result = _.map(cardTemplates, function(cardTemplate) {
			var label = 'Unknown';
			var t = Boom.CardTemplates[cardTemplate];
			if(t) {
				label = t.labelPlural;
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
		var selectedFilter = "All";
		var i = Session.get('boom');
		var filterCriteria = Session.get('cardListView.filterCriteria');
		if(filterCriteria) {
			selectedFilter = Session.get('cardListView.filterDetails');
		}
		if(selectedFilter[this.field]) {
			selectedFilter = selectedFilter[this.field].fieldLabel + ": <strong style='margin-left:5px'>" + selectedFilter[this.field].label + "</strong>";
		} 
		return selectedFilter;
	},

	filterFields: function() {
		return this.values;
	}
});

Template.viewFilterDropdown.events({
	'click .all-filter-item': function() {
		var criteria = Session.get('cardListView.filterCriteria');
		if(criteria) {
			criteria[this.field] = "*";
		}
		Session.set('cardListView.filterCriteria', criteria);
		var boom = Session.get('boom') || 0;
		Session.set('boom', boom+1);
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
		var filterDetails = Session.get('cardListView.filterDetails');
		if(filterDetails == null) {
			filterDetails = {};
		}
		filterDetails[this.field] = this;
		Session.set("cardListView.filterDetails", filterDetails);
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
		Session.set('cardTypeFilter', this);
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

CardListHelpers = {

	onFilterInput: function() {
		var self = this;
		if(this.keyTimer) {
			clearTimeout(this.keyTimer);
		}
		this.keyTimer = setTimeout(function() {
			Session.set("filterCriteria", $("#filter-input").val());
		}, 1000);
	},

	getDefaultCardType: function() {
		return _.keys(Boom.CardTemplates)[0];
	},

	cardItemWidgets: function(card, widgetMeta) {
		return _.map(Boom.CardTemplates[card.templateName][widgetMeta], function(widget) {
			return _.extend(widget, {
				card: card,
			});
		});
	}
}

Template.filter.events({
	'click': function() {
		Session.set('currentFilter', this);
		Session.set('cardTypeFilter', this.cardType);
		Session.set('filterCriteria', this.filter);
	}
});