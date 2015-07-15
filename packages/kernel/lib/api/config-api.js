Boom = Boom || {};

Boom.CardTemplates = {

}

Boom.CardCollections = {

}

Boom.config = {

  addCardTemplate: function(cardTemplate, attrs) {
    var collection = new Mongo.Collection(cardTemplate);
    collection.attachSchema(new SimpleSchema(attrs.fields));
    Boom.CardCollections[cardTemplate] = collection;
    Boom.CardTemplates[cardTemplate] = _.extend(attrs, {
      templateName: cardTemplate,
    });
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

