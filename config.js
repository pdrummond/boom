Boom.CardListView = {
	cardTemplate: "TaskCard"
};

Boom.config.addCardTemplate("TaskCard", {
	label: "Task",
	fields: {
		title: { type: String, label: "Title"},
		status: { type: Object, label: "Status", allowedValues: ['Open', 'Closed'], optional:true},
		content: {type: String, label: "Content", max: 2000, autoform: { rows: 10 }}
	}
});

Boom.config.addCardTemplate("ArticleCard", {
	label: "Article",
	fields: {
		title: { type: String, label: "Title"},
		author: { type: String, label: "Author"},
		content: {type: String, label: "Content"}
	}
});

if(Meteor.isServer) {	

	Boom.config.addBoardTemplate("default", {	
		defaultBoard: true,
		views: [{
			title: "Cards",
			type: "cardListView",

		}, {
			title: "Roadmap",
			type: "kanbanView",
		}]
	});	
}


/*Boom.config.addCardType("taskCard", 
	extendsCard: "defaultCard",
	fields: [{
		status: Choice([
				 {value: "open", 		color: "gray", 		title:"Open"}, 
				 {value: "in-progress", color: "green", 	title:"In-Progress"}, 
				 {value: "blocked", 	color: "red", 		title:"Blocked"}, 
				 {value: "in-test", 	color: "blue", 		title:"In-Test"}, 
				 {value: "done", 		color: "lightgray", title: "Done"}
				]),
		milestone: String	
	}],
	cardIsActionable: true,
	cardIsDoneWhen: {fieldName: "status", value: "done"}
});

Boom.config.addBoardTemplate("software-management", {	
	title: "Software Management",
	pages: [{
		title:"Activity Feed",
		type: "activity-feed",
	}, {
		title:"Cards",
		type: "card-list",
		filterDropdownFields: ["status", "votes", "releases"]
	}, {
		title:"Roadmap",
		type: "board"
		allowedCards: ["taskCard"],		
		allowedColumnFields: ["status", "milestone", "fixed-version"],
	}, {
		title:"Discussions",
		type: "card-list",
		allowedCards: ["discussionCard"]		
	}, {
		title:"Knowledge Base",
		type: "card-list"
		allowedCards: ["articleCard"]	
	}]
});

Boom.config.addWorkflow("task-workflow", {
	cardType: "card",

	rules: [{
		event: "card-created", who: "anyone", action: {name: "set-card-field", field: "milestone", value: "backlog"},
		event: "card-changed", field: "status", from: "new", to: "accepted", who: "pdrummond", actions: [{
			name: "show-field-dialog",
			field: "milestone",
			prompt: "Select milestone for task",			
		}, {
			name: "set-card-field",
			field: "assignee",
			value: "pdrummond"
		}]
	}]
});*/