Messages = new Mongo.Collection("messages");

Meteor.methods({
  createMessage: function(message) {
    //check(Meteor.userId(), String);
    //check(title, String);
    var user = Meteor.user();
    console.log("createMessage USER: " + JSON.stringify(user));
    var message = _.extend(message, {      
      createdBy: user.username,
      createdByEmail: user.emails[0].address,
      createdAt: new Date().getTime(),

    });
    var messageId = Messages.insert(message);
    return {
      _id: messageId
    };
  },

  deleteMessage: function(messageId) {
    //check(messageId, String);
    var existingMessage = Messages.findOne(messageId);
    if(Meteor.userId() !== existingMessage.ownerId) {
      throw new Meteor.Error(
        "not-authorised",
        "You do not have permission to delete this message"
      );
    }
    Messages.remove(messageId);
  }
});

