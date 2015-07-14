Template.layout.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
	this.$('.ui.accordion').accordion();
});

Template.layout.events({
	'click #home-button': function() {
		Router.go("/");
	}
});