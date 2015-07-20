Template.boardPage.helpers({

	boardTitle: function() {
		return Session.get('currentBoard').title;
	},

	boardViews: function() {
		return Boom.BoardTemplates[Session.get("currentBoardTemplate")].views;
	},

	boardViewTemplate: function() {
		var currentView = Session.get('currentBoardView');		
		return currentView.type;
	}
});

Template.viewButton.helpers({
	activeClass: function() {
		return this._id == Session.get('currentBoardViewId') ? "active" : "";
	}
});

Template.viewButton.events({
	'click': function() {
		Boom.Router.changeBoardViewTo(this._id);
	}
});

Template.createCardButtonItem.events({
	'click': function() {		
		Boom.Router.showCreateCardPage({cardTemplate: this.templateName});
	}
});

Template.boardPage.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});