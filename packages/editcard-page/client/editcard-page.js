Template.editCardPage.helpers({
	cardCollection: function() {		
		return Boom.CardCollections[Session.get("currentCardTemplate")];
	}
});

AutoForm.hooks({
	editCardForm: {
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			console.log("editCardForm.onSubmit");
			var self = this;				
			Meteor.call("updateCard", currentDoc._id, Session.get("currentCardTemplate"), updateDoc, function(error, result) {
				if(error) {
					self.done(new Error("Failed to update card: " + error));
				} else {
					self.done();
				}
			});
			return false;
		},

		onSuccess: function() {			
			console.log("editCardForm.onSuccess");
			Boom.Router.showCurrentBoardPage();
		}
	}
});