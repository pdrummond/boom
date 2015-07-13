Template.cardDetailPage.helpers({
	currentCard: function() {
		return Session.get("currentCard");
	}
});

Template.cardDetailPage.onRendered(function() {
	var self = this;
	setTimeout(function() {
		self.$('.ui.accordion').accordion({
			exclusive: false
		});		
	}, 100);
});