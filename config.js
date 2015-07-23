Boom.config.addBoardTemplate("SoftwareBoard", {	
	label: "Software Management",
	fields: {
		title: { type: String, label: "Title"},
		description: {type: String, label: "Description", max: 2000, autoform: { rows: 10 }},		
	},
	views: [{
		_id: "boardroom",
		title: "Boardroom",
		type: "boardRoomPage"		
	}, {
		_id: "cards",
		title: "Cards",
		type: "cardListView",
		filters: {
			'TaskCard': ['type', 'status', 'milestone'],
			'StoryCard': ['type'],
			'ArticleCard': ['type']			
		}
	}, {
		_id: "roadmap",
		title: "Roadmap",
		type: "kanbanView",
		columnFields: ["status", "milestone", "type"],
		cardType: "TaskCard",
	}, {
		_id: "articles",
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
	icon: "fa-tasks",
	fields: {
		title: { type: String, label: "Title"},
		type: { 
			type: String, 
			label: "Type",
			defaultValue: 'task',
			values: [
				{label: 'Task',    value: 'task',	 icon: 'fa-tasks'},
				{label: 'Bug',     value: 'bug', 	 icon: 'fa-bug'},
				{label: 'Feature', value: 'feature', icon: 'fa-bolt'}
			]			
		},
		status: { 
			type: String, 
			label: "Status", 
			defaultValue: 'open',
			values: [
				{label: 'Open', value: 'open', color: 'olive'},
				{label: 'In Progress', value: 'in-progress', color: 'teal'},
				{label: 'Blocked', value: 'blocked', color: 'red'},
				{label: 'In Test', value: 'in-test', color: 'green'},
				{label: 'Resolved', value: 'resolved', color: 'blue'},
				{label: 'Closed', value: 'closed', color: 'black'},
			]
		},
		milestone: { 
			type: String, 
			label: "Milestone", 
			valuesFromCollection: Milestones,
		},
		archived: {type: Boolean, label: "Archived"},
		content: {type: String, label: "Content", optional:true, max: 2000, autoform: { rows: 10 }}
	},
	miniFieldGrid: {
		topField: {field: 'status'},
		bottomFields: [{label: "type", field: 'type', icon: function(ctx) {
			switch(ctx.value) {
				case 'task': return 'fa-tasks';
				case 'bug': return 'fa-bug';
				case 'feature': return 'fa-bolt';
				default: return 'fa-square';
			}
		}}, {label: 'Milestone', field: 'milestone'}]
	}	
});

Boom.config.addCardTemplate("StoryCard", {
	label: "Story",
	icon: "fa-book",
	fields: {
		title: { type: String, label: "Title"},		
		description: {type: String, label: "Description"},
		type: { 
			type: String, 
			label: "Type",
			defaultValue: 'general',
			values: [
				{label: 'General',    	value: 'general',	 icon: 'fa-tasks'},
				{label: 'Functional',     value: 'functional', 	 icon: 'fa-bug'},
				{label: 'Non Functional', value: 'non-functional', icon: 'fa-bolt'}
			]			
		},
	}
});

Boom.config.addCardTemplate("ArticleCard", {
	label: "Article",
	icon: "fa-newspaper-o",
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