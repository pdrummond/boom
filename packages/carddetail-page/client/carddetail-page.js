
Template.cardDetailPage.helpers({
	cardMessages: function() {		
		return Messages.find({channelId: this.channelId});
	}
});

Template.cardDetailPage.events({
	'click #edit-card-menu-item': function() {
		Boom.Router.showEditCardPage(this);
	},

	"keydown #comment-box-input": function(ev) {
		if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();
			var content = $('#comment-box-input').val();
			if(content.length > 0) {
				var message = {
					content: content,
					channelId: this.channelId, 
				};
				Meteor.call('createMessage', message, function(error, result) {
					if (error) {
						return alert(error.reason);
					} else {
						window.scrollTo(0,document.body.scrollHeight);
						$('#comment-box-input').val("");
					}
				});
			}
		}
	}
});

Template.cardDetailPage.onRendered(function() {
	this.$('.ui.dropdown').dropdown();		
});