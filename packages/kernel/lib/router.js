Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
});

Router.route('/board/:boardId/:viewTemplate', function() {
  var board = Boards.findOne(this.params.boardId);  
  Session.set("currentBoardId", this.params.boardId);
  Session.set("currentBoard", board);
  Session.set("currentViewTemplate", this.params.viewTemplate);
  this.render("boardPage");
});

Router.route('/board/:boardId/card/:cardId', function() {
  	var board = Boards.findOne(this.params.boardId);  
  	var card = Cards.findOne(this.params.cardId);
  	Session.set("currentBoardId", this.params.boardId);
    Session.set("currentBoard", board);
    Session.set("currentCardId", this.params.cardId);
    Session.set("currentCard", card);
    this.render("cardDetailPage");
});

Router.route('/cards/create/:cardTemplate', function() {
    Session.set("currentCardTemplate", this.params.cardTemplate);
    this.render("createCardPage");
});

Router.route("/", 'boardListPage');