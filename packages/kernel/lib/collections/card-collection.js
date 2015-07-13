Cards = new Mongo.Collection('cards');

Meteor.methods({
  createCard: function(cardAttributes) {    
    var cardId = Meteor.call('doCreateCard', cardAttributes);

    /*Meteor.call('createActivityMessage', {
      hubId: cardAttributes.hubId,
      activityType: 'createCard',
      addedCardId: newCard._id,
      //addedCardGid: newCard.gid,
      addedCardTitle: newCard.title
    });*/

    return cardId;
  },

  doCreateCard: function(cardAttributes) {    
    /*var gid;
    if(Meteor.isServer) {
      gid = incrementCounter(Counters, "cards");
    }*/
    var userId = Meteor.currentUser ? Meteor.user()._id : cardAttributes.userId;
    if(userId == null) {
    	throw new Meteor.Error("no-user-id", "Card cannot be created without userId");
    }
    var card = _.extend(cardAttributes, {
      createdBy: userId,
      createdAt: new Date().getTime(),
      //gid: gid
    });
    var cardId = Cards.insert(card);

    return cardId;
  }
});