Boom = Boom || {};

Boom.config = {
  addBoardTemplate: function(id, attrs) {
  	console.log("addBoardTemplate(id=" + id + ", attrs=" + JSON.stringify(attrs) + ")");
  	try {
    	var result = Meteor.call('upsertBoardTemplate', _.extend(attrs, {_id: id}));
    	if(result.numUpdates > 0) {
		    console.log("Board template '" + id + "' has been updated");
    	}
	} catch(error) {
		console.error("Error configuring board '" + id + "': " + error.reason);
	}   
  }
};

