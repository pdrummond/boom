
Template.cardDetailPage.events({
	'click #edit-card-button': function() {
		Boom.Router.showEditCardPage(this);
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