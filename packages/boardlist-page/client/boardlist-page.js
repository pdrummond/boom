Template.boardListPage.helpers({
	boards: function() {
		return Boards.find();
	}
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
		Router.go("/board/" + this._id + "/cards");
	}
});