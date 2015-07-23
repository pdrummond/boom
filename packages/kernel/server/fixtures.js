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
	if(Milestones.find().count() == 0) {
		console.log("Adding milestones");
		Milestones.insert({_id: 'backlog', title: "Backlog",default: true});
		Milestones.insert({_id: '1',title: "Sprint 1" });	
	}
});