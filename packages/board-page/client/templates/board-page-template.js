Template.boardPage.helpers({
	views: function() {
		return BoardTemplates.findOne("default").views;
	},

	viewTemplate: function() {
		return Session.get("currentViewTemplate");
	}
});

Template.viewButton.events({
	'click': function() {
		Session.set("currentViewTemplate", this.type);
	}
});