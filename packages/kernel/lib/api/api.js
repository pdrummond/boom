Boom = Boom || {};

Boom.Card = {
	getFieldLabel: function(card, field) {
		if(!Boom.CardTemplates[card.templateName].fields[field]) {
			throw new Meteor.Error("bad-card-field", "Card '" + card.templateName + "' has no field named '" + field + "'");
		}
		return Boom.CardTemplates[card.templateName].fields[field].label;
	},

	getFieldValueMeta: function(card, field, value) {
		if(!Boom.CardTemplates[card.templateName].fields[field]) {
			throw new Meteor.Error("bad-card-field", "Card '" + card.templateName + "' has no field named '" + field + "'");
		}
		
		var valueMeta = _.findWhere(Boom.CardTemplates[card.templateName].fields[field].values, {value: value});
		if(!valueMeta) {
		 	throw new Meteor.Error("bad-card-field-value", "Card '" + card.templateName + "', field '" + field + "' has no value named '" + value + "'");
		}
		return valueMeta;
	}
};