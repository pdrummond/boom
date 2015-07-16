Template.boardPage.helpers({
	views: function() {
		return BoardTemplates.findOne("default").views;
	},

	viewTemplate: function() {
		var viewTemplate = Session.get("currentViewTemplate");
		console.log("viewTemplate: " + viewTemplate);
		return viewTemplate;
	}
});

Template.viewButton.events({
	'click': function() {
		Session.set("currentViewTemplate", this.type);
	}
});

Template.createCardButtonItem.events({
	'click': function() {
		Router.go("/cards/create/" + this.templateName);
	}
});

Template.boardPage.onRendered(function() {
	this.$('.ui.dropdown').dropdown();
});