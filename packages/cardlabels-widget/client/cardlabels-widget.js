Template.cardLabelsWidget.helpers({
	labels: function() {
		return _.map(this.card.labels, function(label) {
			return label.name;
		});
	}
});

Template.label.helpers({
	color: function() {
		if(Boom.config.labels[this] && Boom.config.labels[this].color) {
			return Boom.config.labels[this].color;
		} else {
			return '';
		}
	},

	icon: function() {
		if(Boom.config.labels[this] && Boom.config.labels[this].icon) {
			return Boom.config.labels[this].icon;
		} else {
			return 'circle';
		}
	}
});