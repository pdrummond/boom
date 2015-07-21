Template.boardRoomPage.onRendered(function() {
	this.$('.ui.sidebar').sidebar({
    	context: $('#channel-container')
  	});
});

Template.boardRoomPage.helpers({
	channelTitle: function() {
		return Session.get('currentChannel').title;
	},

	messages: function() {
		return Messages.find({channelId: Session.get('currentChannelId')});
	},

	boardChannels: function() {
		return Channels.find({boardId: Session.get('currentBoardId')});
	}
});

Template.boardRoomPage.events({
	"keydown #create-message-input": function(ev) {
		if(ev.keyCode == 13 && ev.shiftKey == false) {
			ev.preventDefault();
			var content = $('#create-message-input').val();
			if(content.length > 0) {
				var message = {
					content: content,
					channelId: Session.get('currentChannelId')
				};
				Meteor.call('createMessage', message, function(error, result) {
					if (error) {
						return alert(error.reason);
					} else {
						window.scrollTo(0,document.body.scrollHeight);
						$('#create-message-input').val("");
					}
				});
			}
		}
	}
});

Template.boardChannelItem.events({
	'click': function() {		
		Boom.Router.showChannel(this);
	}
});
