
Template.cardListView.helpers({
	cards: function() {				
		return Boom.CardCollections.TaskCard.find(SearchCriteria.getCriteria(), {sort: {updatedAt: -1}});
	},	
});

Template.cardListView.events({
	'click #clear-status-filter': function() {
		Session.set('cardListView.statusFilter', null);
	},
	
	'click #set-active-filter': function() {
		Session.set('cardListView.archivedFilter', false);
	},

	'click #set-archived-filter': function() {
		Session.set('cardListView.archivedFilter', true);
	},

})

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