Milestones = new Mongo.Collection("milestones");

Meteor.methods({
  createMilestone: function(milestone) {
    //check(Meteor.userId(), String);
    //check(title, String);
    //var user = Meteor.user();
    var milestone = _.extend(milestone, {
      //ownerId: user._id,
      //createdBy: user._id,
      createdAt: new Date().getTime(),
    });
    var milestoneId = Milestones.insert(milestone);
    return {
      _id: milestoneId
    };
  },

  deleteMilestone: function(milestoneId) {
    //check(milestoneId, String);
    var existingMilestone = Milestones.findOne(milestoneId);
    /*if(Meteor.userId() !== existingMilestone.ownerId) {
      throw new Meteor.Error(
        "not-authorised",
        "You do not have permission to delete this milestone"
      );
    }*/
    Milestones.remove(milestoneId);
  }
});

