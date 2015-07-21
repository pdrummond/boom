Channels = new Mongo.Collection("channels");

Meteor.methods({
  createChannel: function(title) {
    //check(Meteor.userId(), String);
    //check(title, String);
    //var user = Meteor.user();
    var channel = {
      title: title,
      //ownerId: user._id,
      createdBy: user._id,
      createdAt: new Date().getTime(),
    };
    var channelId = Channels.insert(channel);
    return {
      _id: channelId
    };
  },

  renameChannel: function(channelId, title) {
    //check(channelId, String);
    //check(title, String);
    var existingChannel = Channels.findOne(channelId);
    /*if(Meteor.userId() !== existingChannel.ownerId) {
      throw new Meteor.Error(
        "not-authorised",
        "You do not have permission to rename this channel"
      );
    }*/
    //var user = Meteor.user();
    var channel = _.extend(existingChannel, {
      title: title,
      //updatedBy: user._id,
      updatedAt: new Date().getTime(),
    });
    var channelId = Channels.update(channelId, channel);
    return {
      _id: channelId
    };
  },

  deleteChannel: function(channelId) {
    //check(channelId, String);
    var existingChannel = Channels.findOne(channelId);
    /*if(Meteor.userId() !== existingChannel.ownerId) {
      throw new Meteor.Error(
        "not-authorised",
        "You do not have permission to delete this channel"
      );
    }*/
    Channels.remove(channelId);
  }
});

