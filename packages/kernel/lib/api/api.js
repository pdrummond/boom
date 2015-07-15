Boom = Boom || {};

Boom.Cards = {
	removeAllCards: function() {
		Cards.remove({});
	},

	createCard: function(cardId, attrs) {
		return Meteor.call('createCard', _.extend(attrs, {_id: cardId}));
	}
};