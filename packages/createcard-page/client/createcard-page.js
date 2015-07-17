Template.createCardPage.helpers({
	cardCollection: function() {		
		return Boom.CardCollections[Session.get("currentCardTemplate")];
	}
});

AutoForm.hooks({
	createCardForm: {
		onSubmit: function (card) {
			var self = this;
			card.boardId = Session.get('currentBoardId');
			Meteor.call("createCard", Session.get("currentCardTemplate"), card, function(error, result) {
				if(error) {
					self.done(new Error("Failed to create card: " + error));
				} else {
					self.done();
				}
			});
			return false;
		},

		onSuccess: function() {			
			Boom.Router.showCurrentBoardPage();
		}
	}
});