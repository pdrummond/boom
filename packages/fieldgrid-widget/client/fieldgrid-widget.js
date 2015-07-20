Template.fieldGridWidget.helpers({
	topFieldContent: function() {
		var topFieldMetaData = Boom.CardTemplates[this.card.templateName][this.gridType].topField;
		
		var fieldContent = this.card[topFieldMetaData.field];
		if(topFieldMetaData.label) {
			fieldContent = topFieldMetaData.label + ": " + fieldContent;
		}
		return fieldContent;
	},

	topFieldColor: function() {
		var topField = Boom.CardTemplates[this.card.templateName][this.gridType].topField.field;
		var field = _.findWhere(Boom.CardTemplates[this.card.templateName].fields[topField].values, {value: this.card.status});		
		return field.color;
	},

	bottomFieldValues: function() {
		var self = this;
		return _.map(Boom.CardTemplates[this.card.templateName][this.gridType].bottomFields, function(fieldMetaData) {
			return _.extend(fieldMetaData, {
				value: self.card[fieldMetaData.field]
			});
		});
	}
});

Template.bottomField.helpers({
	icon: function() {
		return _.isFunction(this.icon) ? this.icon(this) : this.icon;
	}
});