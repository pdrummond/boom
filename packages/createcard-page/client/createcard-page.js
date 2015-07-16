Template.createCardPage.helpers({
	cardCollection: function() {
		var cardTemplate = Session.get("currentCardTemplate");
		return Boom.CardCollections[cardTemplate];
	}
});

AutoForm.hooks({
  createCardForm: {
  	onSuccess: function() {
  		Boom.Router.showCurrentBoardPage();
  	}
  }
});