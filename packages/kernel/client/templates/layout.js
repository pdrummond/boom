Template.layout.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
	this.$('.ui.accordion').accordion();
});

Template.layout.helpers({
	channels: function() {
		return Channels.find({boardId: Session.get('currentBoardId')});
	},	
});

Template.layout.events({
	'click #toggle-sidebar': function() {
		$('.ui.sidebar').sidebar('toggle');
	},

	'click #home-button': function() {
		Router.go("/");
	}
});

Template.channelItem.events({
	'click': function() {
		$('.ui.sidebar').sidebar('toggle');		
		Boom.Router.showChannel(this);
	}
})

