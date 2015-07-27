UI.registerHelper('currentUserName', function(context, options) {
	return Meteor.user().username;
});

UI.registerHelper('currentUserImageUrl', function(context, options) {
	return Gravatar.imageUrl(Meteor.user().emails[0].address, {default:'retro'});
});

UI.registerHelper('userImageUrl', function(context, options) {	
	if(context) {
		return Gravatar.imageUrl(context, {default: 'retro'});
	}
});
