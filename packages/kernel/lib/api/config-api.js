Boom = Boom || {};

Boom.CardTemplates = {}
Boom.CardCollections = {}
Boom.BoardTemplates = {}
Boom.BoardCollections = {}

Boom.config = {

  addCardTemplate: function(templateName, attrs) {
    //build autoform compatible schema from config.js 'fields' property.
    attrs.schema = lodash.mapValues(attrs.fields, function(field) {      
      var afField = {
        type: field.type,
        label: field.label        
      };
      if(field.values) {
        afField.allowedValues = _.map(field.values, function(v) { return v.value});
        afField.autoform = {
          options: _.map(field.values, function(v) { return {label:v.label, value:v.value}})
        }
      }
      return afField;

    });
    console.log("attrs.schema = " + JSON.stringify(attrs.schema, null, 4));

    attrs.schema = _.extend(attrs.schema, {
      templateName: {type: String, optional:true, autoform: {omit:true}},
      createdAt: {type: Number, optional:true, autoform: {omit:true}},
      boardId: {type: String, optional:true, autoform: {omit:true}}
    });
    
    var collection = new Mongo.Collection(templateName);
    collection.attachSchema(new SimpleSchema(attrs.schema));
    Boom.CardCollections[templateName] = collection;
    Boom.CardTemplates[templateName] = _.extend(attrs, {
      templateName: templateName,
    });
  },

  addBoardTemplate: function(templateName, attrs) {
    attrs.fields = _.extend(attrs.fields, {
      templateName: {type: String, optional: true, autoform: {omit:true}},
      createdAt: {type: Number, optional: true, autoform: {omit:true}}
    });

  	var collection = new Mongo.Collection(templateName);
    collection.attachSchema(new SimpleSchema(attrs.fields));
    Boom.BoardCollections[templateName] = collection;
    Boom.BoardTemplates[templateName] = _.extend(attrs, {
      templateName: templateName,
    });
  }
};

