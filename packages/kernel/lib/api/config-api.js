Boom = Boom || {};

Boom.CardTemplates = {}
Boom.CardCollections = {}
Boom.BoardTemplates = {}
Boom.BoardCollections = {}

Boom.config = {

  addCardTemplate: function(templateName, attrs) {
    var collection = new Mongo.Collection(templateName);
    collection.attachSchema(new SimpleSchema(attrs.fields));
    Boom.CardCollections[templateName] = collection;
    Boom.CardTemplates[templateName] = _.extend(attrs, {
      templateName: templateName,
    });
  },

  addBoardTemplate: function(templateName, attrs) {
  	var collection = new Mongo.Collection(templateName);
    collection.attachSchema(new SimpleSchema(attrs.fields));
    Boom.BoardCollections[templateName] = collection;
    Boom.BoardTemplates[templateName] = _.extend(attrs, {
      templateName: templateName,
    });
  }
};

