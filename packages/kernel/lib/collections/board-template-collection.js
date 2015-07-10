BoardTemplates = new Mongo.Collection('board-templates');

Meteor.methods({
	upsertBoardTemplate: function(template) {		
	    var numUpdates = BoardTemplates.update(template._id, template, {upsert:true});
	    return {
	    	_id: template._id,
	    	numUpdates: numUpdates
	    }
	},
 });