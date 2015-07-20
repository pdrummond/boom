Template.kanbanView.helpers({
	columns: function() {
		var viewMeta = Session.get("currentBoardView");
		var columnField = Session.get('kanbanView.selectedColumnField');
		if(columnField == null) {
			columnField = "status";
		}
		return Boom.CardTemplates[viewMeta.cardType].fields[columnField].values;
	},

	selectedColumnField: function() {
		var columnField = Session.get('kanbanView.selectedColumnField');
		if(columnField == null) {
			columnField = "status";
		}
		return columnField;
	},

	columnFields: function() {
		var viewMeta = Session.get("currentBoardView");
		var view = _.where(Boom.BoardTemplates[Session.get("currentBoardTemplate")].views, {_id: viewMeta._id});

		return _.map(view[0].columnFields, function(columnField) {
			return {
				label: columnField,
				value: columnField
			};
		});
	}
});

Template.column.helpers({
	cards: function() {
		var viewMeta = Session.get("currentBoardView");
		var columnField = Session.get('kanbanView.selectedColumnField');
		if(columnField == null) {
			columnField = "status";
		}
		var criteria = {
			boardId: Session.get('currentBoardId'),
		};
		criteria[columnField] = this.value;	
		return Boom.CardCollections[viewMeta.cardType].find(criteria);
	}
});


Template.columnField.events({
	'click': function() {
		Session.set('kanbanView.selectedColumnField', this.value);
	}
	
})