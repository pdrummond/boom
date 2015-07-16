Boom.config.addBoardTemplate("SoftwareBoard", {	
	label: "Software Management",
	fields: {
		title: { type: String, label: "Title"},
		description: {type: String, label: "Description", max: 2000, autoform: { rows: 10 }},
		templateName: {type: String, label: "Template Name", optional: true}
	},
	views: [{
		title: "Cards",
		type: "cardListView",
		cardTtype: "TaskCard",
	}, {
		title: "Roadmap",
		type: "kanbanView",
		cardType: "TaskCard",
	}, {
		title: "Articles",
		type: "cardListView",
		cardType: "ArticleCard"
	}]
});	

Boom.config.addBoardTemplate("SimpleBoard", {	
	label: "Kanban Board",
	fields: {
		title: { type: String, label: "Title"},
		description: {type: String, label: "Description", max: 2000, autoform: { rows: 10 }}
	},
	views: [{
		title: "Board",
		type: "kanbanView",
		cardType: "TaskCard",
	}]
});	

Boom.config.addCardTemplate("TaskCard", {
	label: "Task",
	fields: {
		title: { type: String, label: "Title"},
		status: { type: String, label: "Status", allowedValues: ['Open', 'In-Progress', 'Blocked', 'In-Test', 'Resolved', 'Closed']},
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

Boom.CardListView = { //FIXME: This doesn't make sense here - it needs to come from the view config for the board.
	cardTemplate: "TaskCard"
};

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