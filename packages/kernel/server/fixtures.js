/*
if(Channels.find().count() == 0) {
  Channels.insert({
    title: "General Discussion",
  });
  Channels.insert({
    title: "Discussion One",
  });
}*/

Meteor.startup(function() {
  /*console.log("BOOM");
  Boom.CardCollections.TaskCard.remove({});

  var boardId = Boom.BoardCollections.SoftwareBoard.insert({    
    title: "Board One",
    description: "Board one desc",
    templateName: 'SoftwareBoard',
    cardPrefix: "BD"
  });
  console.log('boardId: ' + boardId);

  var user = Fake.user({
    fields: ['name', 'username', 'emails.address', 'profile.name'],
  });    
  for(var i=0; i<1000; i++) {
    var card = {
      title: Fake.sentence(10),
      content: Fake.paragraph(20),
      createdBy: user.username,
      createdByEmail: user.emails[0].address,
      templateName: 'TaskCard',
      cid: i,
      boardId: boardId,
    }
    var cardId = Boom.CardCollections.TaskCard.insert(card);
    console.log("card " + cardId + " inserted")
  }*/
  
});