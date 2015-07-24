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
        label: field.label,
        optional: field.optional || false,
        defaultValue: field.defaultValue
      };
      if(field.values) {
        afField.allowedValues = _.map(field.values, function(v) { return v.value});
        afField.autoform = {
          options: _.map(field.values, function(v) { return {label:v.label, value:v.value}})
        }

      } else if(field.valuesFromCollection) {
        var collection = field.valuesFromCollection;
        var defaultItem = collection.findOne({default: true});        
        if(defaultItem) {
          afField.defaultValue = defaultItem._id;
        }
        afField.autoform = {
          options: collection.find().map(function(item) { 
            return {label:item.title, value:item._id};
          })
        };        
      }
      return afField;

    });

    attrs.schema = _.extend(attrs.schema, {
      templateName: {type: String, optional:true, autoform: {omit:true}},      
      boardId: {type: String, optional:true, autoform: {omit:true}},
      channelId: {type: String, optional:true, autoform: {omit:true}},
      createdAt: Boom.SchemaHelpers.createdAt,
      updatedAt: Boom.SchemaHelpers.updatedAt,
      labels: {type: Array,optional: true, minCount: 0, maxCount: 5},
      "labels.$": { type: Object, optional:true},
      "labels.$.name": {type: String, optional:true},
    });
    
    //console.log("attrs.schema = " + JSON.stringify(attrs.schema, null, 4));
    
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
      channelId: {type: String, optional: true, autoform: {omit:true}},
      createdAt: {type: Number, optional: true, autoform: {omit:true}}
    });

    //console.log("attrs.fields: = " + JSON.stringify(attrs.fields, null, 4));

    var collection = new Mongo.Collection(templateName);
    collection.attachSchema(new SimpleSchema(attrs.fields));
    Boom.BoardCollections[templateName] = collection;
    Boom.BoardTemplates[templateName] = _.extend(attrs, {
      templateName: templateName,
    });
  }
};

