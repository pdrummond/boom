UI.registerHelper('truncate', function(context, options) {
	if(context.hash.content.length > context.hash.size) {
		return (context.hash.content.substring(0, context.hash.size) + "...");
	} else {
		return context.hash.content;
	}
});
