Template.createBoardPage.helpers({
	boardCollection: function() {
		var templateName  = Session.get("currentBoardTemplate");
		return Boom.BoardCollections[templateName];
	}
});

AutoForm.hooks({
	createBoardForm: {
		onSubmit: function (board) {
			var self = this;
			console.log("createBoardForm.onSubmit");
			Meteor.call("createBoard", Session.get("currentBoardTemplate"), board, function(error, result) {
				if(error) {
					self.done(new Error("Failed to create board: " + error));
				} else {
					self.done();
				}
			});
			return false;
		},

		onSuccess: function() {
			console.log("createBoardForm.onSuccess");
			Boom.Router.showBoardListPage();
		}
	}
});