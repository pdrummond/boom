Boom.config.labels = {
	Label1: {color:'teal'},
	Messages: {color:'red', icon:'bomb'}
};

Boom.config.addBoardTemplate("SoftwareBoard", {	
	label: "Software Management",
	defaultCardType: 'TaskCard',
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
		cardType: "TaskCard"
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

Boom.config.addCardTemplate("MilestoneCard", {
	label: "Milestone",
	labelPlural: "Milestones",
	icon: "fa-flag",
	fields: {
		title: { type: String, label: "Name"},		
		content: {type: String, label: "Description", optional:true},
		default: {type: Boolean, label: "Default Milestone", optional:true, defaultValue:false}
	}
});

Boom.config.addCardTemplate("TaskCard", {
	label: "Task",
	labelPlural: "Tasks",
	icon: "fa-ticket",
	fields: {
		title: { type: String, label: "Title"},
		content: {type: String, label: "Content", optional:true, max: 2000, autoform: { rows: 10 }},
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
			optional: true,
			valuesFromCard: {cardType: "MilestoneCard"},
		},

	},
	rightWidgets: [{name: 'cardLabelsWidget'}],
	leftWidgets: [{name: 'cardStatusWidget'}]		
});


Boom.config.addCardTemplate("TodoCard", {
	label: "Todo",
	labelPlural: "Todos",
	icon: "fa-square",
	fields: {
		title: { type: String, label: "Title"},
		content: {type: String, label: "Content", optional:true, max: 2000, autoform: { rows: 10 }},
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
			{label: 'Duplicate', value: 'duplicate', color: 'gray'},
			{label: 'WontFix', value: 'in-test', color: 'gray'},				
			{label: 'Closed', value: 'closed', color: 'black'},
			]
		},
		milestone: { 
			type: String, 
			label: "Milestone", 
			optional: true,
			valuesFromCollection: Milestones,
		}		
	},
	rightWidgets: [{name: 'cardLabelsWidget'}],
	leftWidgets: [{name: 'cardStatusWidget'}]		
});

Boom.config.addCardTemplate("BugCard", {
	label: "Bug",
	labelPlural: "Bugs",
	icon: "fa-bug",
	fields: {
		title: { type: String, label: "Title"},
		content: {type: String, label: "Content", optional:true, max: 2000, autoform: { rows: 10 }},
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
			{label: 'Duplicate', value: 'duplicate', color: 'gray'},
			{label: 'WontFix', value: 'in-test', color: 'gray'},				
			{label: 'Closed', value: 'closed', color: 'black'},
			]
		},
		milestone: { 
			type: String, 
			label: "Milestone", 
			optional: true,
			valuesFromCollection: Milestones,
		}		
	},
	rightWidgets: [{name: 'cardLabelsWidget'}],
	leftWidgets: [{name: 'cardStatusWidget'}]		
});

Boom.config.addCardTemplate("StoryCard", {
	label: "Story",
	labelPlural: "Stories",
	icon: "fa-book",
	fields: {
		title: { type: String, label: "Title"},		
		description: {type: String, label: "Description", optional:true},
		type: { 
			type: String, 
			label: "Type",
			defaultValue: 'general',
			values: [
			{label: 'General',    	value: 'general',	 icon: 'fa-tasks'},
			{label: 'Functional',     value: 'functional', 	 icon: 'fa-bug'},
			{label: 'Non Functional', value: 'non-functional', icon: 'fa-bolt'}
			]			
		}		
	},
	rightWidgets: [{name: 'storyTasksWidget'}, {name: 'cardLabelsWidget'}],
});

Boom.config.addCardTemplate("ArticleCard", {
	label: "Article",
	labelPlural: "Articles",
	icon: "fa-newspaper-o",
	fields: {
		title: { type: String, label: "Title"},
		author: { type: String, label: "Author", optional:true},
		content: {type: String, label: "Content", optional:true}
	}
});

Boom.config.addCardTemplate("DiscussionCard", {
	label: "Discussion",
	labelPlural: "Discussions",
	icon: "fa-comments-o",
	fields: {
		title: { type: String, label: "Topic"},		
		content: {type: String, label: "Content", optional:true}
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

AccountsTemplates.configureRoute('signIn');
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);