Template.boardPage.helpers({

	boardTitle: function() {
		return Session.get('currentBoard').title;
	},

	boardViews: function() {
		return Boom.BoardTemplates[Session.get("currentBoardTemplate")].views;
	},

	boardViewTemplate: function() {
		var views = Boom.BoardTemplates[Session.get("currentBoardTemplate")].views;
		var currentView = _.find(views, function(view) { return view._id == Session.get("currentBoardViewId")});
		console.log("currentViewTemplate:" + currentView.type);
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