Template.boardListPage.helpers({
});

Template.boardListPage.events({
	'click #create-board-button': function() {
		var title = prompt("Board name: ");
		Meteor.call("createBoard", {
			title: title,
			template: 'standard'
		}, function(error, result) {
			if(error) {
				alert("Error creating board: " + error);
			}
		});
	}
});

Template.boardListItem.events({
	'click': function() {		
		Boom.Router.showBoardPage({boardTemplate: this.templateName, boardId: this._id})
	}
});

Template.createBoardButtonItem.events({
	'click': function() {
		Boom.Router.showCreateBoardPage({boardTemplate: this.templateName});		
	}
});


Template.boardListPage.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});