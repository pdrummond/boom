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
		var topFieldMetaData = Boom.CardTemplates[this.card.templateName][this.gridType].topField;
		if(topFieldMetaData.color == null) {
			return "black";
		}
		return _.isFunction(topFieldMetaData.color) ? topFieldMetaData.color(this) : topFieldMetaData.color;
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