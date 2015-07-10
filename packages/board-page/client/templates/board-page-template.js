Template.boardPage.helpers({
	views: function() {
		return BoardTemplates.findOne("default").views;
	}
});