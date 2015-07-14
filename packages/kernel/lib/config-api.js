Boom = Boom || {};

Boom.CardTypes = {

}



Boom.config = {

  addCardTemplate: function(cardType, attrs) {
    Boom.CardTypes[cardType] = new Mongo.Collection(cardType);
    Boom.CardTypes[cardType].attachSchema(new SimpleSchema(attrs.fields));    
  },

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

