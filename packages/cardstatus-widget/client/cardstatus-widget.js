Template.cardStatusWidget.helpers({
	color: function() {
		return Boom.Card.getFieldValueMeta(this.card, 'status', this.card.status).color;
	},

	status: function() {
		return Boom.Card.getFieldValueMeta(this.card, 'status', this.card.status).label;

	}
});