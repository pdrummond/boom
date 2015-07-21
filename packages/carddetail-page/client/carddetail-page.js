
Template.cardDetailPage.helpers({
	cardMessages: function() {		
		return Messages.find({channelId: this.channelId});
	}
});

Template.cardDetailPage.events({
	'click #edit-card-button': function() {
		Boom.Router.showEditCardPage(this);
	},

	"keydown #create-comment-input": function(ev) {
		if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();
			var content = $('#create-comment-input').val();
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
						$('#create-comment-input').val("");
					}
				});
			}
		}
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