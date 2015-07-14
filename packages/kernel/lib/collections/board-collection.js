Boards = new Mongo.Collection('board');

Meteor.methods({
	createBoard: function(attrs) {
		//var user = Meteor.user();
	    var board = _.extend(attrs, {
	    	//createdBy: user._id,
	    	createdAt: new Date().getTime(),      
	    });
	    return Boards.insert(board);    
	},
 });