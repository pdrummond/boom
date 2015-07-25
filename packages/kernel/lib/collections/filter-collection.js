Filters = new Mongo.Collection("filters");

Meteor.methods({
  createFilter: function(filter) {
    //check(Meteor.userId(), String);
    //check(title, String);
    //var user = Meteor.user();
    var filter = _.extend(filter, {
      //ownerId: user._id,
      //createdBy: user._id,
      createdAt: new Date().getTime(),
    });    
    var filterId = Filters.insert(filter);
    return {
      _id: filterId
    };
  },

  deleteFilter: function(filterId) {
    //check(filterId, String);
    var existingFilter = Filters.findOne(filterId);
    /*if(Meteor.userId() !== existingFilter.ownerId) {
      throw new Meteor.Error(
        "not-authorised",
        "You do not have permission to delete this filter"
      );
    }*/
    Filters.remove(filterId);
  }
});

