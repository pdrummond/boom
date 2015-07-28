Template.cardStatusWidget.helpers({
	milestone: function() {
		//TODO: How to get milestone?
		return Boom.Card.getFieldValueMeta(this.card, 'milestone', this.card.milestone).label;
	}
});