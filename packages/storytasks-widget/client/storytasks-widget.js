Template.storyTasksWidget.helpers({
	cardRefs: function() {		
		var refs = _.map(this.card.refs, function(ref) {
			return Boom.CardCollections[ref.cardType].findOne(ref.cardId);
		});
		return refs;
	}
});

Template.cardRef.helpers({
	cardPrefix: function() {
		return Session.get('currentBoard').cardPrefix;
	},

	color: function() {
		var value = _.findWhere(Boom.CardTemplates[this.templateName].fields["status"].values, {value: this.status});
		return value ? value.color : '';
	}
});